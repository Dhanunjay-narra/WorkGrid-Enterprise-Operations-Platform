export function generateCrmHealthConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
