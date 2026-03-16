import type { KpiTile } from '../../features/dashboard/types/dashboard.types';

export function KpiGrid({ kpis }: { kpis: KpiTile[] }) {
  return (
    <section className="kpi-grid">
      {kpis.map((kpi) => (
        <article className="tile" key={kpi.label}>
          <p className="label">{kpi.label}</p>
          <p className="value">{kpi.value}</p>
          {kpi.trend && <p className="muted">{kpi.trend}</p>}
        </article>
      ))}
    </section>
  );
}
