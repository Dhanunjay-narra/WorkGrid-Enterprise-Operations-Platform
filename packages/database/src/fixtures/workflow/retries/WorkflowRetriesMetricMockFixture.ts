export function generateWorkflowRetriesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
