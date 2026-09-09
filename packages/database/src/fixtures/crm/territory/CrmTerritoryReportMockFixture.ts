export function generateCrmTerritoryReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
