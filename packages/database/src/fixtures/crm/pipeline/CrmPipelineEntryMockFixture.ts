export function generateCrmPipelineEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
