export function generateWorkflowExecutionsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
