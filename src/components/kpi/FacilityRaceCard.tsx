import type { RaceLane } from '../../features/dashboard/types/dashboard.types';

export function FacilityRaceCard({ race }: { race: RaceLane[] }) {
  return (
    <section className="panel">
      <h2>Facility Race</h2>
      {race.map((lane) => (
        <div key={lane.facility} className="race-row">
          <div className="race-head">
            <span>{lane.facility}</span>
            <span>{lane.progressPct}% of goal</span>
          </div>
          <div className="bar-wrap">
            <div className="bar" style={{ width: `${lane.progressPct}%` }} />
          </div>
          <p className="muted">{lane.poundsToday.toLocaleString()} lbs today</p>
        </div>
      ))}
    </section>
  );
}
