export function generateWorkflowNodesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
