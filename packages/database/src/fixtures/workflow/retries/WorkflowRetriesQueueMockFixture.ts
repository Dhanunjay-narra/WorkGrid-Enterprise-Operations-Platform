export function generateWorkflowRetriesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
