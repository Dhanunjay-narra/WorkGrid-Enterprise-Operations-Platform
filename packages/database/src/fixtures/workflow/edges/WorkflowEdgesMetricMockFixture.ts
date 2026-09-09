export function generateWorkflowEdgesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
