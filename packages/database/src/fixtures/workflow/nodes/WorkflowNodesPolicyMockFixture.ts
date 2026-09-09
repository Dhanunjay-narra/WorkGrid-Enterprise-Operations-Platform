export function generateWorkflowNodesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
