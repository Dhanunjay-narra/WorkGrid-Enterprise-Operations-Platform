export function generateCrmHealthPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
