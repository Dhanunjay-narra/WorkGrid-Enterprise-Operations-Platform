export function generateCrmPipelineMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
