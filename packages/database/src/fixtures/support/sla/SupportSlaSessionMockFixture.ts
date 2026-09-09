export function generateSupportSlaSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
