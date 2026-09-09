export function generateWorkflowNodesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
