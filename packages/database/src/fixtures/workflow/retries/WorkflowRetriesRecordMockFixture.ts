export function generateWorkflowRetriesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
