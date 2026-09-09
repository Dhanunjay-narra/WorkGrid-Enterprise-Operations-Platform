export function generateCrmPipelineQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
