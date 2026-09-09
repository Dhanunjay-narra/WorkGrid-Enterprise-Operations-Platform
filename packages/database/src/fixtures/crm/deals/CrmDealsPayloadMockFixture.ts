export function generateCrmDealsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
