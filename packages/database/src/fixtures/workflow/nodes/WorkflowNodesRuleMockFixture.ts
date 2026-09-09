export function generateWorkflowNodesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
