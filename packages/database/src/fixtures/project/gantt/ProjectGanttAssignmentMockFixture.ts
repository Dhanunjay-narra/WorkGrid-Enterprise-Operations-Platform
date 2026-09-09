export function generateProjectGanttAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
