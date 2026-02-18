import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/** Rough polygon [lat, lng] covering Glasgow, West Dunbartonshire, Stirlingshire and surrounding areas we serve. */
const SERVICE_AREA_POLYGON: [number, number][] = [
  [55.82, -4.78],   // SW – south of Dumbarton / Clyde
  [55.82, -3.92],   // SE – east of Stirling
  [56.15, -3.92],   // NE – north of Stirling
  [56.15, -4.52],   // N – above Killearn / Drymen
  [56.02, -4.78],   // NW – Helensburgh / Gare Loch
  [55.82, -4.78],   // close polygon
];

const MAP_CENTER: [number, number] = [55.98, -4.35];
const MAP_ZOOM = 9;

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        scrollWheelZoom: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const polygon = L.default.polygon(SERVICE_AREA_POLYGON, {
        color: "#0d5c2e",
        weight: 2,
        fillColor: "#0d5c2e",
        fillOpacity: 0.25,
      }).addTo(map);

      map.fitBounds(polygon.getBounds(), { padding: [24, 24] });
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-0 isolate">
      <div
        ref={containerRef}
        className="w-full h-full min-h-[280px] lg:min-h-[320px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 [&_.leaflet-control]:!z-[100] [&_.leaflet-pane]:!z-[1]"
        aria-label="Map showing Double O Detailing service area (Glasgow and Central Scotland)"
      />
    </div>
  );
}
