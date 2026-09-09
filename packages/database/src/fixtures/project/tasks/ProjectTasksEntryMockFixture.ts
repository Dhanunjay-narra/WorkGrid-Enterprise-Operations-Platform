export function generateProjectTasksEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
