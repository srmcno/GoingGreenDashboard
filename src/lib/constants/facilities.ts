export const FACILITIES = ['Combined', 'Durant', 'Poteau'] as const;

export type Facility = (typeof FACILITIES)[number];
