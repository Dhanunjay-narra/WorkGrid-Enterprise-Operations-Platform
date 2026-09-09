export function generateCrmPipelineSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
