export function generateProjectGanttMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
