export function generateProjectTasksStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
