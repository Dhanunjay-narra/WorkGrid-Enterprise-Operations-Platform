export function generateWorkflowDagSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
