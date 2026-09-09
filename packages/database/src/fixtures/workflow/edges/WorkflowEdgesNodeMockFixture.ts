export function generateWorkflowEdgesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
