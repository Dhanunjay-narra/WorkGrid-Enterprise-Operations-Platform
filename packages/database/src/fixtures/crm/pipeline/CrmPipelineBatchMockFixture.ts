export function generateCrmPipelineBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
