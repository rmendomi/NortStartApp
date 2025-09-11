export const D_INITIATIVES = [
  { key: 'INIT-1', name: 'Onboarding Pyme', negocio: 'Pyme', programa: 'Acq', palanca: 'Activación' },
  { key: 'INIT-2', name: 'Pagos M', negocio: 'Retail', programa: 'Ret', palanca: 'Uso' },
];

export const D_EPICS = [
  { key: 'EPC-101', initiative: 'INIT-1', name: 'Nueva app ingreso' },
  { key: 'EPC-102', initiative: 'INIT-1', name: 'Kits tutoriales' },
  { key: 'EPC-201', initiative: 'INIT-2', name: 'Checkout 1‑click' },
];

export const D_MILESTONES = [
  { id: 'M1', initiative: 'INIT-1', name: 'Release v1', date: new Date(Date.now()-10*86400000).toISOString() },
  { id: 'M2', initiative: 'INIT-1', name: 'AB test start', date: new Date(Date.now()+3*86400000).toISOString() },
  { id: 'M3', initiative: 'INIT-2', name: 'Go‑live pilotos', date: new Date(Date.now()+14*86400000).toISOString() },
];

export const D_KRSUMMARY = [
  { kr: { id:'KR1', name:'% Activación 7d', target:35 }, total:3, done:2, pointsTotal:10, pointsDone:5 },
  { kr: { id:'KR2', name:'NPS onboarding', target:60 }, total:2, done:1, pointsTotal:4, pointsDone:2 },
  { kr: { id:'KR3', name:'% Conversión pagos', target:25 }, total:1, done:1, pointsTotal:8, pointsDone:8 },
];
