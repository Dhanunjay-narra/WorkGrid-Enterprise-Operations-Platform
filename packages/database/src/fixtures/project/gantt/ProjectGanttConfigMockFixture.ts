export function generateProjectGanttConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
