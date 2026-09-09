export function generateWorkflowNodesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
