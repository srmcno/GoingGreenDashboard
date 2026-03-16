import type { Facility } from '../../../lib/constants/facilities';

export interface KpiTile {
  label: string;
  value: string;
  trend?: string;
}

export interface RaceLane {
  facility: Exclude<Facility, 'Combined'>;
  progressPct: number;
  poundsToday: number;
}

export interface ActivityItem {
  id: string;
  timestamp: string;
  message: string;
}

export interface DashboardSnapshot {
  asOf: string;
  facility: Facility;
  status: 'on-pace' | 'behind-pace' | 'goal-met';
  kpis: KpiTile[];
  race: RaceLane[];
  materialMix: Array<{ material: string; pounds: number }>;
  activity: ActivityItem[];
  source: 'api' | 'mock';
}
