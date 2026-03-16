# Going Green Dashboard Prototype

A Vite + React + TypeScript starter prototype for the floor-first recycling command board.

## Run locally

```bash
npm install
npm run dev
```

## Connection check

1. Copy `.env.example` to `.env`.
2. Set `VITE_DASHBOARD_API_URL` to your aggregation endpoint (Power Automate/Function/API).
3. Restart dev server.
4. Source badge in top-right shows `api` when connected, `mock` when not configured.

Expected response shape:

```json
{
  "asOf": "2026-01-05T13:15:00.000Z",
  "facility": "Combined",
  "status": "on-pace",
  "kpis": [{ "label": "Pounds Today", "value": "18420", "trend": "+7%" }],
  "race": [{ "facility": "Durant", "progressPct": 78, "poundsToday": 9300 }],
  "materialMix": [{ "material": "Cardboard", "pounds": 6100 }],
  "activity": [{ "id": "1", "timestamp": "08:12", "message": "..." }]
}
```

## Notes

- Auto-refresh is set to 10 minutes via TanStack Query.
- Zustand stores view mode and facility selector.
- Prototype currently focuses on Wallboard-style readability and API connection validation.
