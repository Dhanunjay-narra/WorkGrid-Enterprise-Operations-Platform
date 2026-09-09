export function generateProjectGanttScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
