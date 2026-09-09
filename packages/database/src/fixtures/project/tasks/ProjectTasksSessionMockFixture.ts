export function generateProjectTasksSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
