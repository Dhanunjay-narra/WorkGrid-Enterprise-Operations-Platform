export function generateWorkflowExecutionsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
