export function generateWorkflowNodesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
