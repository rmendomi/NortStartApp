// src/data/jiraDummy.js
export const JIRA_DUMMY = {
  projects: [
    { id: "10000", key: "OPS", name: "Operaciones" },
    { id: "10001", key: "APP", name: "App Móvil" },
  ],
  issueTypes: [
    { id: "1", name: "Bug" },
    { id: "3", name: "Task" },
    { id: "10001", name: "Story" },
    { id: "10002", name: "Epic" },
  ],
  statuses: [
    { id: "1", name: "To Do", statusCategory: { name: "To Do" } },
    { id: "3", name: "In Progress", statusCategory: { name: "In Progress" } },
    { id: "4", name: "Done", statusCategory: { name: "Done" } },
  ],
  workflows: [
    { name: "Software Simplificado" },
    { name: "Kanban Genérico" },
  ],
  fields: [
    { id: "summary", name: "Summary" },
    { id: "description", name: "Description" },
    { id: "priority", name: "Priority" },
    { id: "assignee", name: "Assignee" },
  ],
};
