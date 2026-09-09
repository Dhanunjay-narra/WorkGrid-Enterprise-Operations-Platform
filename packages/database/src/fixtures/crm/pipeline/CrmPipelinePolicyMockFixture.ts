export function generateCrmPipelinePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelinePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
