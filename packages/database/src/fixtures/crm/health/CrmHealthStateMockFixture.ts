export function generateCrmHealthStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
