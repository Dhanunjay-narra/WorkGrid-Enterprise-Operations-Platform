export function generateWorkflowRetriesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
