export function generateProjectTasksEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
