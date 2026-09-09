export function generateProjectGanttItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
