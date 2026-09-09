export function generateWorkflowEdgesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
