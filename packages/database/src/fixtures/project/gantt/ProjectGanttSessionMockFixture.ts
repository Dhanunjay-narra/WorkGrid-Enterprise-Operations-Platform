export function generateProjectGanttSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
