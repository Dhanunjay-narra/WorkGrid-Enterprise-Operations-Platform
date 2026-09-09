export function generateCrmPipelineConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
