export function generateCrmTerritoryPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
