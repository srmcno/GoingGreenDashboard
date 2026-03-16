export function MaterialMixCard({ mix }: { mix: Array<{ material: string; pounds: number }> }) {
  const total = mix.reduce((sum, item) => sum + item.pounds, 0);

  return (
    <section className="panel">
      <h2>Material Mix Today</h2>
      {mix.map((item) => {
        const pct = total > 0 ? Math.round((item.pounds / total) * 100) : 0;
        return (
          <div key={item.material} className="mix-row">
            <div className="race-head">
              <span>{item.material}</span>
              <span>{pct}%</span>
            </div>
            <div className="bar-wrap">
              <div className="bar secondary" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
