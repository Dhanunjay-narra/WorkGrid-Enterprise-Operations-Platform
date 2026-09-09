export function generateWorkflowExecutionsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
