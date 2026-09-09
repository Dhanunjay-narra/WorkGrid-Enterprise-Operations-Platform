export function generateWorkflowEdgesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
