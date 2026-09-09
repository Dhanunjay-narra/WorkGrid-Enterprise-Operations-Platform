export function generateSupportSlaPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
