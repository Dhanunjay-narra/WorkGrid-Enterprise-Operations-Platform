export function generateProjectTasksAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
