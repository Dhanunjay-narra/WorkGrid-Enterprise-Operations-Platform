export function generateWorkflowRetriesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
