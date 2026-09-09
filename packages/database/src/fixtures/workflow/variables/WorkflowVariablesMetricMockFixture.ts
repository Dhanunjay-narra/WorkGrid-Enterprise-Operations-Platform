export function generateWorkflowVariablesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
