export function generateCrmPipelineNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
