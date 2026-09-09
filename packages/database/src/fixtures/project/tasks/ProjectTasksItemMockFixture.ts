export function generateProjectTasksItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
