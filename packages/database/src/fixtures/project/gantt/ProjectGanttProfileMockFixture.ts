export function generateProjectGanttProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
