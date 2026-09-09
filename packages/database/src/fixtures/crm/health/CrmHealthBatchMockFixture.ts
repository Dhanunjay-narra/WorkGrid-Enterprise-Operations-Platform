export function generateCrmHealthBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
