import type { DashboardSnapshot } from '../types/dashboard.types';
import type { Facility } from '../../../lib/constants/facilities';

export const createMockSnapshot = (facility: Facility): DashboardSnapshot => ({
  asOf: new Date().toISOString(),
  facility,
  status: 'on-pace',
  source: 'mock',
  kpis: [
    { label: 'Pounds Today', value: '18,420', trend: '+7% vs yesterday' },
    { label: 'Bales Today', value: '23', trend: 'Avg 801 lbs' },
    { label: 'Efficiency', value: '92.4%', trend: '+1.2 pts' },
    { label: 'Projected End', value: '22,700', trend: 'Need 1,280 lbs/hr' },
    { label: 'Trips Today', value: '8', trend: '2 active now' },
    { label: 'Revenue MTD', value: '$126,300', trend: '+$6,900 vs plan' },
  ],
  race: [
    { facility: 'Durant', progressPct: 78, poundsToday: 9_300 },
    { facility: 'Poteau', progressPct: 71, poundsToday: 9_120 },
  ],
  materialMix: [
    { material: 'Cardboard', pounds: 6_100 },
    { material: 'PET', pounds: 4_820 },
    { material: 'Aluminum', pounds: 3_250 },
    { material: 'Mixed Plastic', pounds: 2_340 },
  ],
  activity: [
    { id: '1', timestamp: '08:12', message: 'Bale B-443 created in Durant (835 lbs)' },
    { id: '2', timestamp: '08:04', message: 'Trip #189 returned to Poteau yard' },
    { id: '3', timestamp: '07:56', message: 'New customer onboarded in McCurtain County' },
    { id: '4', timestamp: '07:49', message: 'Material spike: PET +14% over 30-min avg' },
  ],
});
