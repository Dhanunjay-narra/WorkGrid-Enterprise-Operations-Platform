export function generateCrmTerritorySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritorySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
