export function generateCrmHealthEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
