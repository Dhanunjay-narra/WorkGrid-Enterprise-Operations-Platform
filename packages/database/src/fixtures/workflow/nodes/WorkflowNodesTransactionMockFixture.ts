export function generateWorkflowNodesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
