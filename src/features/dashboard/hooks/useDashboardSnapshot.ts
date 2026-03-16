import { useQuery } from '@tanstack/react-query';
import { getDashboardSnapshot } from '../services/dashboardApi';
import { useUiStore } from '../../../store/uiStore';

export function useDashboardSnapshot() {
  const facility = useUiStore((state) => state.facility);
  return useQuery({
    queryKey: ['dashboard-snapshot', facility],
    queryFn: () => getDashboardSnapshot(facility),
    refetchInterval: 10 * 60 * 1000,
  });
}
