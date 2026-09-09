export function generateCrmPipelineItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
