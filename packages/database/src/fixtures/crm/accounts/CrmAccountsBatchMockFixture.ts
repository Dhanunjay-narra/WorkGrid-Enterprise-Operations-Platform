export function generateCrmAccountsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
