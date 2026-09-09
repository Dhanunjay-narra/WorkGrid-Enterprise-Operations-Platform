export function generateWorkflowCronsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
