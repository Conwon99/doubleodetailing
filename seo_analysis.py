#!/usr/bin/env python3
"""
Technical SEO analysis of Screaming Frog internal_all.csv export.
Generates a markdown report with all required sections.
"""
import csv
import re
from collections import defaultdict
from pathlib import Path

CSV_PATH = Path(__file__).parent / "internal_all.csv"
OUTPUT_PATH = Path(__file__).parent / "TECHNICAL_SEO_AUDIT_REPORT.md"


def safe_int(val, default=0):
    try:
        return int(float(val)) if val else default
    except (ValueError, TypeError):
        return default


def safe_float(val, default=0.0):
    try:
        return float(val) if val else default
    except (ValueError, TypeError):
        return default


def main():
    rows = []
    with open(CSV_PATH, encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
        for row in reader:
            rows.append(row)

    # Only HTML pages for content/SEO metrics (exclude images, CSS, JS)
    html_rows = [
        r
        for r in rows
        if r.get("Content Type", "").startswith("text/html")
    ]
    # Indexable HTML pages (200 OK) — for meta, title, H1, content (exclude redirects)
    indexable_html = [r for r in html_rows if r.get("Status Code") == "200"]
    all_urls = [r["Address"] for r in rows]

    # --- 1. THIN CONTENT (200 OK pages only) ---
    thin_word_count = [
        r for r in indexable_html
        if safe_int(r.get("Word Count", 0)) > 0 and safe_int(r.get("Word Count", 0)) < 300
    ]
    low_text_ratio = [
        r for r in indexable_html
        if safe_float(r.get("Text Ratio", 0)) > 0 and safe_float(r.get("Text Ratio", 0)) < 3.0
    ]
    missing_h1 = [r for r in indexable_html if safe_int(r.get("H1-1 Length", 0)) == 0]
    missing_h2 = [
        r for r in indexable_html
        if safe_int(r.get("H2-1 Length", 0)) == 0 and safe_int(r.get("H2-2 Length", 0)) == 0
    ]
    short_titles = [
        r for r in indexable_html
        if safe_int(r.get("Title 1 Length", 0)) > 0 and safe_int(r.get("Title 1 Length", 0)) < 30
    ]
    short_meta = [
        r for r in indexable_html
        if safe_int(r.get("Meta Description 1 Length", 0)) > 0
        and safe_int(r.get("Meta Description 1 Length", 0)) < 120
    ]

    # --- 2. DUPLICATE CONTENT (among 200 OK pages) ---
    title_to_urls = defaultdict(list)
    meta_to_urls = defaultdict(list)
    for r in indexable_html:
        t = (r.get("Title 1") or "").strip()
        m = (r.get("Meta Description 1") or "").strip()
        if t:
            title_to_urls[t].append(r["Address"])
        if m:
            meta_to_urls[m].append(r["Address"])

    duplicate_titles = {t: urls for t, urls in title_to_urls.items() if len(urls) > 1}
    duplicate_metas = {m: urls for m, urls in meta_to_urls.items() if len(urls) > 1}

    # Near-duplicate / canonical issues: canonical points to different URL (trailing slash mismatch)
    canonical_issues = []
    for r in indexable_html:
        addr = r["Address"]
        canon = (r.get("Canonical Link Element 1") or "").strip()
        if not canon:
            continue
        # Canonical to different URL (e.g. /page/ canonical to /page)
        if canon != addr and "jimboscleaning.com" in canon:
            canonical_issues.append({"url": addr, "canonical": canon})

    # --- 3. INTERNAL LINK STRUCTURE ---
    high_outlinks = [
        r for r in indexable_html
        if safe_int(r.get("Unique Outlinks", 0)) > 100
    ]
    orphan_pages = [
        r for r in indexable_html
        if safe_int(r.get("Unique Inlinks", 0)) == 0
    ]
    few_inlinks = [
        r for r in indexable_html
        if 0 < safe_int(r.get("Unique Inlinks", 0)) <= 2
    ]
    deep_pages = [
        r for r in indexable_html
        if safe_int(r.get("Crawl Depth", 0)) >= 4
    ]

    # --- 4. REDIRECTS ---
    redirects = [r for r in rows if r.get("Status Code") in ("301", "302")]
    temp_redirects = [r for r in redirects if r.get("Status Code") == "302"]
    redirect_times = [
        (r["Address"], safe_float(r.get("Response Time", 0)))
        for r in redirects
        if safe_float(r.get("Response Time", 0)) > 0
    ]
    slow_redirects = [r for r in redirects if safe_float(r.get("Response Time", 0)) > 1.0]

    # --- 5. 404s ---
    not_found = [r for r in rows if r.get("Status Code") == "404"]

    # --- 6. META DESCRIPTIONS (200 OK only) ---
    no_meta = [
        r for r in indexable_html
        if safe_int(r.get("Meta Description 1 Length", 0)) == 0
    ]
    meta_too_short = [
        r for r in indexable_html
        if 0 < safe_int(r.get("Meta Description 1 Length", 0)) < 120
    ]
    meta_too_long = [
        r for r in indexable_html
        if safe_int(r.get("Meta Description 1 Length", 0)) > 160
    ]

    # Indexability: non-HTML marked indexable (CSS/JS)
    indexable_non_html = [
        r for r in rows
        if r.get("Indexability") == "Indexable"
        and not (r.get("Content Type") or "").startswith("text/html")
    ]

    # Build report
    lines = []
    lines.append("# Technical SEO Audit Report — Jimbos Cleaning")
    lines.append("")
    lines.append("**Source:** Screaming Frog crawl export (`internal_all.csv`)  ")
    lines.append("**Total URLs crawled:** " + str(len(rows)))
    lines.append("**HTML pages:** " + str(len(html_rows)))
    lines.append("**200 OK indexable HTML pages:** " + str(len(indexable_html)) + " *(content/meta/title/H1 metrics below use this set)*")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Executive Summary
    lines.append("## Executive Summary")
    lines.append("")
    issues = []
    if thin_word_count:
        issues.append(f"**Thin content:** {len(thin_word_count)} HTML page(s) with under 300 words")
    if duplicate_titles:
        issues.append(f"**Duplicate titles:** {len(duplicate_titles)} title(s) used on multiple URLs")
    if duplicate_metas:
        issues.append(f"**Duplicate meta descriptions:** {len(duplicate_metas)} meta(s) repeated")
    if canonical_issues:
        issues.append(f"**Canonical/URL consistency:** {len(canonical_issues)} page(s) with canonical pointing to different URL (trailing slash)")
    if high_outlinks:
        issues.append(f"**High outlinks:** {len(high_outlinks)} page(s) with >100 internal outlinks")
    if orphan_pages:
        issues.append(f"**Orphan pages:** {len(orphan_pages)} indexable page(s) with zero inlinks")
    if few_inlinks:
        issues.append(f"**Low inlinks:** {len(few_inlinks)} page(s) with ≤2 inlinks")
    if deep_pages:
        issues.append(f"**Deep crawl depth:** {len(deep_pages)} page(s) at depth ≥4")
    if temp_redirects:
        issues.append(f"**Temporary redirects (302):** {len(temp_redirects)} — should be 301 where permanent")
    if slow_redirects:
        issues.append(f"**Slow redirects (>1s):** {len(slow_redirects)} URL(s)")
    if not_found:
        issues.append(f"**404s:** {len(not_found)} URL(s) returning 404")
    if no_meta:
        issues.append(f"**Missing meta description:** {len(no_meta)} HTML page(s)")
    if meta_too_short:
        issues.append(f"**Meta description too short (<120 chars):** {len(meta_too_short)} page(s)")
    if meta_too_long:
        issues.append(f"**Meta description too long (>160 chars):** {len(meta_too_long)} page(s)")
    if indexable_non_html:
        issues.append(f"**Non-HTML indexable:** {len(indexable_non_html)} asset(s) (e.g. CSS) marked indexable")
    if missing_h1:
        issues.append(f"**Missing H1:** {len(missing_h1)} HTML page(s)")
    if missing_h2:
        issues.append(f"**Missing H2:** {len(missing_h2)} HTML page(s) with no H2")

    for i in issues:
        lines.append("- " + i)
    lines.append("")
    lines.append("**Impact:** These issues can dilute link equity, cause duplicate content signals, and reduce crawl efficiency. Fixing canonicals, consolidating duplicates, and addressing thin/orphan pages will have the highest impact.")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Detailed Findings
    lines.append("## Detailed Findings")
    lines.append("")

    lines.append("### 1. Thin Content Detection")
    lines.append("")
    lines.append("| Issue | Count | Notes |")
    lines.append("|-------|-------|--------|")
    lines.append(f"| Word count < 300 | {len(thin_word_count)} | Excludes redirects/empty; only pages with word count > 0 |")
    lines.append(f"| Low text ratio (<3%) | {len(low_text_ratio)} | Low content-to-code ratio |")
    lines.append(f"| Missing H1 | {len(missing_h1)} | |")
    lines.append(f"| No H2 tags | {len(missing_h2)} | |")
    lines.append(f"| Title < 30 chars | {len(short_titles)} | |")
    lines.append(f"| Meta description < 120 chars | {len(short_meta)} | |")
    lines.append("")
    if thin_word_count:
        lines.append("**Sample — thin content (word count < 300):**")
        for r in thin_word_count[:15]:
            w = safe_int(r.get("Word Count", 0))
            lines.append(f"- [{r['Address']}]({r['Address']}) — {w} words")
        if len(thin_word_count) > 15:
            lines.append(f"- ... and {len(thin_word_count) - 15} more.")
        lines.append("")
    if missing_h1:
        lines.append("**Sample — missing H1:**")
        for r in missing_h1[:10]:
            lines.append(f"- {r['Address']}")
        if len(missing_h1) > 10:
            lines.append(f"- ... and {len(missing_h1) - 10} more.")
        lines.append("")
    lines.append("")

    lines.append("### 2. Duplicate Content Issues")
    lines.append("")
    lines.append(f"- **Exact duplicate titles:** {len(duplicate_titles)} unique title(s) used on multiple URLs.")
    if duplicate_titles:
        for title, urls in list(duplicate_titles.items())[:5]:
            lines.append(f"  - Title: \"{title[:60]}...\" ({len(urls)} URLs)")
            for u in urls[:3]:
                lines.append(f"    - {u}")
        lines.append("")
    lines.append(f"- **Duplicate meta descriptions:** {len(duplicate_metas)} meta(s) repeated across URLs.")
    if duplicate_metas:
        for meta, urls in list(duplicate_metas.items())[:3]:
            lines.append(f"  - Meta (first 60 chars): \"{(meta[:60])}...\" — {len(urls)} URLs")
        lines.append("")
    lines.append(f"- **Canonical/URL mismatch (e.g. trailing slash):** {len(canonical_issues)} page(s). Trailing-slash URLs canonicalise to non-trailing (or vice versa), while 301s may send users to the opposite variant — can confuse crawlers and dilute signals.")
    if canonical_issues:
        for x in canonical_issues[:5]:
            lines.append(f"  - {x['url']} → canonical: {x['canonical']}")
        lines.append("")
    lines.append("")

    lines.append("### 3. Internal Link Structure")
    lines.append("")
    lines.append(f"| Metric | Count |")
    lines.append("|--------|-------|")
    lines.append(f"| Pages with >100 unique outlinks | {len(high_outlinks)} |")
    lines.append(f"| Orphan pages (0 inlinks, 200 OK) | {len(orphan_pages)} |")
    lines.append(f"| Pages with ≤2 inlinks | {len(few_inlinks)} |")
    lines.append(f"| Pages at crawl depth ≥4 | {len(deep_pages)} |")
    lines.append("")
    if high_outlinks:
        lines.append("**Sample — excessive outlinks:**")
        for r in sorted(high_outlinks, key=lambda x: -safe_int(x.get("Unique Outlinks", 0)))[:5]:
            lines.append(f"- {r['Address']} — {r.get('Unique Outlinks')} unique outlinks")
        lines.append("")
    if orphan_pages:
        lines.append("**Orphan pages (no inlinks):**")
        for r in orphan_pages[:15]:
            lines.append(f"- {r['Address']}")
        lines.append("")
    if deep_pages:
        lines.append("**Sample — deep depth (≥4):**")
        for r in deep_pages[:10]:
            lines.append(f"- {r['Address']} — depth {r.get('Crawl Depth')}")
        lines.append("")
    lines.append("")

    lines.append("### 4. Redirects")
    lines.append("")
    lines.append(f"- Total redirects (301+302): {len(redirects)}")
    lines.append(f"- Temporary (302): {len(temp_redirects)} — prefer 301 for permanent moves.")
    lines.append(f"- Slow redirects (response >1s): {len(slow_redirects)}")
    if redirect_times:
        sorted_times = sorted(redirect_times, key=lambda x: -x[1])[:5]
        lines.append("**Slowest redirects (by response time):**")
        for url, t in sorted_times:
            lines.append(f"- {url} — {t:.2f}s")
    lines.append("")
    lines.append("*(Redirect chains >3 hops and loops require full redirect chain export; not deducible from this flat URL list.)*")
    lines.append("")
    lines.append("")

    lines.append("### 5. 404 Errors")
    lines.append("")
    if not_found:
        lines.append(f"**URLs returning 404:** {len(not_found)}")
        for r in not_found:
            lines.append(f"- {r['Address']}")
    else:
        lines.append("No 404s found in this crawl.")
    lines.append("")
    lines.append("*(Internal links pointing to 404s and broken external links require the Links or Response Codes report in Screaming Frog.)*")
    lines.append("")
    lines.append("")

    lines.append("### 6. Meta Description Issues")
    lines.append("")
    lines.append(f"| Issue | Count |")
    lines.append("|-------|-------|")
    lines.append(f"| No meta description | {len(no_meta)} |")
    lines.append(f"| Too short (<120 chars) | {len(meta_too_short)} |")
    lines.append(f"| Too long (>160 chars) | {len(meta_too_long)} |")
    lines.append(f"| Duplicate meta descriptions | {len(duplicate_metas)} |")
    lines.append("")
    if no_meta:
        lines.append("**Sample — missing meta:**")
        for r in no_meta[:10]:
            lines.append(f"- {r['Address']}")
        if len(no_meta) > 10:
            lines.append(f"- ... and {len(no_meta) - 10} more.")
    lines.append("")
    if meta_too_long:
        lines.append("**Sample — meta >160 chars:**")
        for r in meta_too_long[:5]:
            lines.append(f"- {r['Address']} — {r.get('Meta Description 1 Length')} chars")
    lines.append("")
    lines.append("")

    lines.append("### Other: Indexable Non-HTML Resources")
    lines.append("")
    if indexable_non_html:
        lines.append(f"**Resources (e.g. CSS) that are indexable:** {len(indexable_non_html)}. These should typically be noindex or excluded from indexing.")
        for r in indexable_non_html[:10]:
            lines.append(f"- {r['Address']} ({r.get('Content Type', '')})")
    else:
        lines.append("No non-HTML indexable resources found.")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Priority Matrix
    lines.append("## Priority Matrix")
    lines.append("")
    lines.append("| Priority | Issue | SEO impact | Ease of fix |")
    lines.append("|----------|--------|------------|--------------|")
    lines.append("| **P0** | Canonical/URL consistency (trailing slash vs 301) | High — duplicate signals, crawl waste | Medium — config/redirect alignment |")
    lines.append("| **P0** | Duplicate titles & meta descriptions | High — dilution, CTR | Low — unique copy per URL |")
    lines.append("| **P1** | Orphan & very low-inlink pages | Medium — discovery, equity | Medium — add internal links |")
    lines.append("| **P1** | Missing H1 / thin content / missing meta | Medium — relevance, snippets | Low — content & meta |")
    lines.append("| **P1** | 302 → 301 where move is permanent | Medium — link equity | Low — server config |")
    lines.append("| **P2** | High outlinks, deep depth | Lower — UX/crawl efficiency | Medium — IA/navigation |")
    lines.append("| **P2** | Meta length (short/long), non-HTML indexable | Lower — snippets/crawl | Low — meta & robots |")
    lines.append("| **P2** | Slow redirects | Lower — UX | Medium — server/CDN |")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Recommendations
    lines.append("## Actionable Recommendations")
    lines.append("")
    lines.append("1. **Canonical & trailing slash:** Choose one URL form (with or without trailing slash). Implement 301 from the other form to the chosen one, and set canonical on every page to that same form. Ensure internal links use the chosen form.")
    lines.append("")
    lines.append("2. **Titles & meta:** Give every important HTML page a unique title (50–60 chars) and unique meta description (120–160 chars). Fix duplicate titles and metas first on location/service pages.")
    lines.append("")
    lines.append("3. **Thin content & H1:** Add or expand content on pages with <300 words where the page is meant to rank. Ensure every template has a single, relevant H1; add H2s for structure.")
    lines.append("")
    lines.append("4. **Orphans & inlinks:** Link to key location/service pages from the homepage, main nav, and hub pages (e.g. locations index). Add contextual links in body content.")
    lines.append("")
    lines.append("5. **Redirects:** Replace 302 with 301 for permanent moves. Investigate redirect chains in Screaming Frog (Redirect Chains tab) and collapse to a single hop where possible. Optimise server response time for redirects.")
    lines.append("")
    lines.append("6. **404s:** Add redirects to the most relevant live page or remove/update internal links. For external broken links, fix or remove.")
    lines.append("")
    lines.append("7. **Non-HTML indexable:** Add `X-Robots-Tag: noindex` or ensure robots.txt / meta noindex for CSS/JS if they are being indexed.")
    lines.append("")
    lines.append("---")
    lines.append("")

    # Data for visualisations
    lines.append("## Data for Visualisations")
    lines.append("")
    lines.append("Use the counts below to build charts (e.g. bar chart by issue type, pie of indexability, histogram of word count).")
    lines.append("")
    lines.append("| Category | Count |")
    lines.append("|----------|-------|")
    lines.append(f"| Thin content (word count <300) | {len(thin_word_count)} |")
    lines.append(f"| Duplicate titles | {len(duplicate_titles)} |")
    lines.append(f"| Duplicate meta descriptions | {len(duplicate_metas)} |")
    lines.append(f"| Canonical/URL mismatch | {len(canonical_issues)} |")
    lines.append(f"| Pages with >100 outlinks | {len(high_outlinks)} |")
    lines.append(f"| Orphan pages | {len(orphan_pages)} |")
    lines.append(f"| Pages with ≤2 inlinks | {len(few_inlinks)} |")
    lines.append(f"| Depth ≥4 | {len(deep_pages)} |")
    lines.append(f"| 301 redirects | {len([r for r in redirects if r.get('Status Code') == '301'])} |")
    lines.append(f"| 302 redirects | {len(temp_redirects)} |")
    lines.append(f"| 404 | {len(not_found)} |")
    lines.append(f"| Missing meta description | {len(no_meta)} |")
    lines.append(f"| Meta too short | {len(meta_too_short)} |")
    lines.append(f"| Meta too long | {len(meta_too_long)} |")
    lines.append(f"| Missing H1 | {len(missing_h1)} |")
    lines.append(f"| Indexable non-HTML | {len(indexable_non_html)} |")
    lines.append("")
    lines.append("**Ongoing monitoring:** Re-run Screaming Frog monthly; filter by Indexability Status, Response Code, and the above columns. Set up custom extraction for canonical vs address and word count to track thin content.")
    lines.append("")
    lines.append("### Issue distribution (bar chart)")
    lines.append("")
    lines.append("```mermaid")
    lines.append("xychart-beta")
    lines.append('    title "Technical SEO issues by count"')
    lines.append("    x-axis [Canonical, Meta>160, Depth≥4, Few inlinks, Non-HTML, Thin, Meta short, No H1, No H2]")
    lines.append("    y-axis \"Count\" 0 --> 180")
    lines.append(f"    bar [{len(canonical_issues)}, {len(meta_too_long)}, {len(deep_pages)}, {len(few_inlinks)}, {len(indexable_non_html)}, {len(thin_word_count)}, {len(meta_too_short)}, {len(missing_h1)}, {len(missing_h2)}]")
    lines.append("```")
    lines.append("")
    lines.append("*(Content-related counts are for 200 OK HTML pages only.)*")
    lines.append("")

    report = "\n".join(lines)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as out:
        out.write(report)

    print(f"Report written to {OUTPUT_PATH}")
    return OUTPUT_PATH


if __name__ == "__main__":
    main()
