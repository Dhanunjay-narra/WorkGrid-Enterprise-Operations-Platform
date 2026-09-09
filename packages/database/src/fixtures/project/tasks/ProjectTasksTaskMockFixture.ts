export function generateProjectTasksTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
