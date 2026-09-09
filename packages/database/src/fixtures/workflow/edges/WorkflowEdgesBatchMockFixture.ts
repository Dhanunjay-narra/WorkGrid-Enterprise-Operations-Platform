export function generateWorkflowEdgesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
