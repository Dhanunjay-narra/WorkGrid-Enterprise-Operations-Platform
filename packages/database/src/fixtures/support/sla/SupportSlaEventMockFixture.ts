export function generateSupportSlaEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
