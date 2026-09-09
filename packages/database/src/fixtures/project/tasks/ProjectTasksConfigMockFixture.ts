export function generateProjectTasksConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
