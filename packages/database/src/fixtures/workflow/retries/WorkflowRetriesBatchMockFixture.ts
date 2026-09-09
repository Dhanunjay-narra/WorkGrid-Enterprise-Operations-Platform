export function generateWorkflowRetriesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
