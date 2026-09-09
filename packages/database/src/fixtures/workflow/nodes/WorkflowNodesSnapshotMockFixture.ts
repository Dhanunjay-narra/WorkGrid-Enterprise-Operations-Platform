export function generateWorkflowNodesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
