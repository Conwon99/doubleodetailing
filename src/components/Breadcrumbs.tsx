export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-600 md:text-base">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && (
              <span className="text-neutral-400" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-black font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
