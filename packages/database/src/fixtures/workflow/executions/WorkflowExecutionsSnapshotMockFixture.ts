export function generateWorkflowExecutionsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
