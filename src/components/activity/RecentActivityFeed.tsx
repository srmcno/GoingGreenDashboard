import type { ActivityItem } from '../../features/dashboard/types/dashboard.types';

export function RecentActivityFeed({ activity }: { activity: ActivityItem[] }) {
  return (
    <section className="panel">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activity.map((item) => (
          <li key={item.id}>
            <span className="timestamp">{item.timestamp}</span>
            <span>{item.message}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
