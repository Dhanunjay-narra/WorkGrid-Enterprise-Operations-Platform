export function generateCrmPipelineRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
