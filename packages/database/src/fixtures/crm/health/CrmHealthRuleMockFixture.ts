export function generateCrmHealthRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
