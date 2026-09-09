export function generateWorkflowRetriesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
