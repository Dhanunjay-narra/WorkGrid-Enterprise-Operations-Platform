export function generateCrmPipelinePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelinePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
