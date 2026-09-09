export function generateWorkflowRetriesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
