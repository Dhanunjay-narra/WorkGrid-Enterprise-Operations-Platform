export function generateCrmHealthPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
