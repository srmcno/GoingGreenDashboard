import { FACILITIES } from '../../lib/constants/facilities';
import { useUiStore } from '../../store/uiStore';

interface Props {
  onRefresh: () => void;
  lastRefreshLabel: string;
  source: 'api' | 'mock' | 'unknown';
}

export function TopBar({ onRefresh, lastRefreshLabel, source }: Props) {
  const facility = useUiStore((s) => s.facility);
  const setFacility = useUiStore((s) => s.setFacility);
  const mode = useUiStore((s) => s.mode);
  const toggleMode = useUiStore((s) => s.toggleMode);

  return (
    <header className="topbar">
      <div>
        <h1>Going Green Command Board</h1>
        <p className="muted">Shift 6:00 AM – 2:30 PM • Last refresh {lastRefreshLabel}</p>
      </div>
      <div className="topbar-controls">
        <select value={facility} onChange={(e) => setFacility(e.target.value as (typeof FACILITIES)[number])}>
          {FACILITIES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={toggleMode}>Mode: {mode}</button>
        <button onClick={onRefresh}>Refresh</button>
        <span className={`badge ${source === 'api' ? 'ok' : 'warn'}`}>Source: {source}</span>
      </div>
    </header>
  );
}
