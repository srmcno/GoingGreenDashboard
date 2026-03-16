import type { Facility } from '../../../lib/constants/facilities';
import { createMockSnapshot } from './mockData';
import type { DashboardSnapshot } from '../types/dashboard.types';

const API_URL = import.meta.env.VITE_DASHBOARD_API_URL as string | undefined;

export async function getDashboardSnapshot(facility: Facility): Promise<DashboardSnapshot> {
  if (!API_URL) {
    return createMockSnapshot(facility);
  }

  const response = await fetch(`${API_URL}?facility=${encodeURIComponent(facility)}`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Dashboard API failed (${response.status})`);
  }

  const payload = (await response.json()) as DashboardSnapshot;
  return { ...payload, facility, source: 'api' };
}
