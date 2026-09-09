export function generateWorkflowRetriesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
