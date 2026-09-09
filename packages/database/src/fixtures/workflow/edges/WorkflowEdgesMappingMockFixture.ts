export function generateWorkflowEdgesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
