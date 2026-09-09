export function generateProjectTasksTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
