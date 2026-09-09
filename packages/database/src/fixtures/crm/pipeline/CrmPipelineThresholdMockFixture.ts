export function generateCrmPipelineThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
