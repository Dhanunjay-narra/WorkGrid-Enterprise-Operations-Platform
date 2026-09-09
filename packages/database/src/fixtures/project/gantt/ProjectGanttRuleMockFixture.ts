export function generateProjectGanttRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
