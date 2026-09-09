export function generateProjectTasksQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
