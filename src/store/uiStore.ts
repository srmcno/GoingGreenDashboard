import { create } from 'zustand';
import type { Facility } from '../lib/constants/facilities';

interface UiState {
  facility: Facility;
  mode: 'wallboard' | 'supervisor';
  setFacility: (facility: Facility) => void;
  toggleMode: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  facility: 'Combined',
  mode: 'wallboard',
  setFacility: (facility) => set({ facility }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'wallboard' ? 'supervisor' : 'wallboard' })),
}));
