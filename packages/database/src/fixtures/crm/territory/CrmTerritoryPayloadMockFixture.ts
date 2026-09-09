export function generateCrmTerritoryPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
