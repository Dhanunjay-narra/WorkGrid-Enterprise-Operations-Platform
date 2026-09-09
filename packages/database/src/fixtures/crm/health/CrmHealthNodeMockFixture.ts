export function generateCrmHealthNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
