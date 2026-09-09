export function generateWorkflowRetriesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
