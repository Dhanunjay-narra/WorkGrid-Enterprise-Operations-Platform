export function generateWorkflowNodesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
