export function generateCrmTerritoryScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritorySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
