export function generateWorkflowDagSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
