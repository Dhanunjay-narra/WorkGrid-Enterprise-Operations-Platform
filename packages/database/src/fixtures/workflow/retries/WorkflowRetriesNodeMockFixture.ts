export function generateWorkflowRetriesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
