export function generateProjectGanttNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
