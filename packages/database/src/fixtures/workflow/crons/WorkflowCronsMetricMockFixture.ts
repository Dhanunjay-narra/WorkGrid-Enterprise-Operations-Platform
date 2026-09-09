export function generateWorkflowCronsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
