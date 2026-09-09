export function generateWorkflowNodesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
