export function generateWorkflowEdgesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
