export function generateCrmLeadsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
