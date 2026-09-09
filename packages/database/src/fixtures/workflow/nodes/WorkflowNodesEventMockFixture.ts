export function generateWorkflowNodesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
