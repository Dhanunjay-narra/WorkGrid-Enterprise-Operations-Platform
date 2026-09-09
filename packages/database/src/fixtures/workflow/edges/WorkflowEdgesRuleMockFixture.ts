export function generateWorkflowEdgesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
