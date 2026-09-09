export function generateWorkflowRetriesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
