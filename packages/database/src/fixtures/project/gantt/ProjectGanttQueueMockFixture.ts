export function generateProjectGanttQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
