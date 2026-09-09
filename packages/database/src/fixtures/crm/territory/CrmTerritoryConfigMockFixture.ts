export function generateCrmTerritoryConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
