export function generateProjectTasksBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
