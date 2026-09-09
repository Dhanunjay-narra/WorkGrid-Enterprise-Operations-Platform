export function generateWorkflowDagMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
