export function generateProjectGanttPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
