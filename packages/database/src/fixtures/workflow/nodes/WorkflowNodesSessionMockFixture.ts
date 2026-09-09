export function generateWorkflowNodesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
