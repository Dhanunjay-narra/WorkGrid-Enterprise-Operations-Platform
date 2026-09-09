export function generateWorkflowCronsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
