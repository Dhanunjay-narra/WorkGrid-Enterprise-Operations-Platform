export function generateWorkflowNodesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
