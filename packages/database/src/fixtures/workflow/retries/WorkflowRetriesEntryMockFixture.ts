export function generateWorkflowRetriesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
