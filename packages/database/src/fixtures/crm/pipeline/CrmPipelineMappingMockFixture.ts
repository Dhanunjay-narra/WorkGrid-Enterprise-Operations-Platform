export function generateCrmPipelineMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
