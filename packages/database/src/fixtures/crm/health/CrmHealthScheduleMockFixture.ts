export function generateCrmHealthScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
