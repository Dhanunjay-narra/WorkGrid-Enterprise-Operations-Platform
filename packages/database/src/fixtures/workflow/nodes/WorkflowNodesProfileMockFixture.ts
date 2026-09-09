export function generateWorkflowNodesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
