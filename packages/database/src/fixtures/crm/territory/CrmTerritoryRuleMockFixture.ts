export function generateCrmTerritoryRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
