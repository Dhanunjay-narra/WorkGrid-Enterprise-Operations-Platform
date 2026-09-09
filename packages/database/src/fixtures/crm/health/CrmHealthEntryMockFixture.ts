export function generateCrmHealthEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
