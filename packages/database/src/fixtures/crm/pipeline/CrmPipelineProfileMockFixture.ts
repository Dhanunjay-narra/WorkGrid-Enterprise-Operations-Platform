export function generateCrmPipelineProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
