export function generateProjectTasksPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
