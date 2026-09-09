export function generateWorkflowExecutionsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
