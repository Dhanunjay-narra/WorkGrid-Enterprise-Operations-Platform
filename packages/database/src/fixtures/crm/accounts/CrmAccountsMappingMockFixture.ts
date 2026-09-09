export function generateCrmAccountsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
