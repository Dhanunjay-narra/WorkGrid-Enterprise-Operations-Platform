export function generateWorkflowNodesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
