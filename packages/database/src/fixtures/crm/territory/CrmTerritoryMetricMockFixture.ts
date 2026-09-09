export function generateCrmTerritoryMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
