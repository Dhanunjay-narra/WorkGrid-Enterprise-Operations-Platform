export function generateProjectGanttPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
