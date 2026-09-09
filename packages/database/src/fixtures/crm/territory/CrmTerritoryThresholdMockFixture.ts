export function generateCrmTerritoryThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
