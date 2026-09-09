export function generateProjectGanttTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
