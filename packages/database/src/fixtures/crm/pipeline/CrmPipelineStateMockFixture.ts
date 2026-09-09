export function generateCrmPipelineStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
