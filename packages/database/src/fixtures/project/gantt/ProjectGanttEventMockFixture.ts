export function generateProjectGanttEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
