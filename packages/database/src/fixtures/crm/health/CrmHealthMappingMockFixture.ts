export function generateCrmHealthMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
