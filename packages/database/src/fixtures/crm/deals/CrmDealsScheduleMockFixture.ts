export function generateCrmDealsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
