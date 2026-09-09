export function generateWorkflowEdgesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
