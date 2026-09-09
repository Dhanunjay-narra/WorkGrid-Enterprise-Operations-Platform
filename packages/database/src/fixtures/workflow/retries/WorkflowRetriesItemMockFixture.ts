export function generateWorkflowRetriesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
