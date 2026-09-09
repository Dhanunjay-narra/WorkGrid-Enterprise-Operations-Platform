export function generateCrmTerritoryProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
