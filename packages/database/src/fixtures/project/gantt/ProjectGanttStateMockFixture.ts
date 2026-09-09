export function generateProjectGanttStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
