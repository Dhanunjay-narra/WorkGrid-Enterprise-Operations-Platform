export function generateWorkflowRetriesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
