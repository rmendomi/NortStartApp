// Iniciativas transversales -> Epics -> Tasks (fechas aproximadas)
const M = (m) => {
  const d = new Date(); d.setMonth(d.getMonth()+m); d.setDate(5+m);
  return d;
};

export const ROADMAP = [
  {
    id: "init-1",
    key: "SMAI-77",
    title: "Producto",
    project: "Core",
    owner: "PM",
    start: M(0), end: M(2), status: "progress",
    epics: [
      {
        id: "ep-1", key: "SMAI-30", title: "Preparar entorno", owner: "SI",
        start: M(0), end: M(0.6), status: "done",
        tasks: [
          { id: "t-1", key: "T-101", title: "Pipeline", owner: "Dev", start: M(0), end: M(0.3), status: "done" },
          { id: "t-2", key: "T-102", title: "Infra", owner: "DevOps", start: M(0.2), end: M(0.6), status: "done" },
        ]
      },
      {
        id: "ep-2", key: "SMAI-76", title: "Integración sistemas", owner: "SI",
        start: M(0), end: M(0.8), status: "progress",
        tasks: [
          { id: "t-3", key: "T-201", title: "SSO", owner: "Dev", start: M(0.1), end: M(0.7), status: "progress" },
        ]
      },
      {
        id: "ep-3", key: "SMAI-31", title: "Prueba 1", owner: "QA",
        start: M(0), end: M(1.2), status: "progress",
        tasks: [
          { id: "t-4", key: "T-301", title: "Test plan", owner: "QA", start: M(0.4), end: M(1.1), status: "progress" },
        ]
      },
    ],
  },
  {
    id: "init-2",
    key: "SMAI-78",
    title: "Marketing",
    project: "Growth",
    owner: "PMM",
    start: M(1), end: M(3), status: "plan",
    epics: [
      { id: "ep-4", key: "SMAI-37", title: "Lanzamiento Q4", owner: "MKT", start: M(2), end: M(3), status: "plan", tasks: [] }
    ],
  },
  {
    id: "init-3",
    key: "SMAI-79",
    title: "Operaciones",
    project: "Ops",
    owner: "COO",
    start: M(0.5), end: M(2.5), status: "progress",
    epics: []
  },
  {
    id: "init-4",
    key: "SMAI-80",
    title: "Ventas",
    project: "Sales",
    owner: "Head Sales",
    start: M(1), end: M(3), status: "plan",
    epics: []
  },
  {
    id: "init-5",
    key: "SMAI-81",
    title: "Gestiones Varias",
    project: "Ops",
    owner: "Admin",
    start: M(0), end: M(1.5), status: "progress",
    epics: [
      { id: "ep-5", key: "SMAI-29", title: "Pruebas", owner: "QA", start: M(0.8), end: M(2), status: "progress", tasks: [] },
    ]
  },
];
