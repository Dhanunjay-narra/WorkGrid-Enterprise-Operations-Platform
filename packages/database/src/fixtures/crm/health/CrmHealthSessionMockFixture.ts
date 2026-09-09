export function generateCrmHealthSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
