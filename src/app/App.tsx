import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TopBar } from '../components/layout/TopBar';
import { useDashboardSnapshot } from '../features/dashboard/hooks/useDashboardSnapshot';
import { formatTimestamp } from '../lib/format/date';
import { KpiGrid } from '../components/kpi/KpiGrid';
import { FacilityRaceCard } from '../components/kpi/FacilityRaceCard';
import { RecentActivityFeed } from '../components/activity/RecentActivityFeed';
import { MaterialMixCard } from '../components/kpi/MaterialMixCard';

export function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useDashboardSnapshot();

  const refresh = () => queryClient.invalidateQueries({ queryKey: ['dashboard-snapshot'] });

  const refreshLabel = useMemo(() => {
    if (!data?.asOf) return '—';
    return formatTimestamp(data.asOf);
  }, [data?.asOf]);

  return (
    <main className="app-shell">
      <TopBar onRefresh={refresh} lastRefreshLabel={refreshLabel} source={data?.source ?? 'unknown'} />

      {isLoading && <div className="panel">Loading dashboard snapshot…</div>}
      {isError && <div className="panel error">Connection failed: {(error as Error).message}</div>}

      {data && (
        <>
          <section className={`status ${data.status}`}>
            Goal status: {data.status.replace('-', ' ')} • Facility: {data.facility}
          </section>
          <KpiGrid kpis={data.kpis} />
          <section className="grid-two">
            <FacilityRaceCard race={data.race} />
            <MaterialMixCard mix={data.materialMix} />
          </section>
          <RecentActivityFeed activity={data.activity} />
        </>
      )}
    </main>
  );
}
