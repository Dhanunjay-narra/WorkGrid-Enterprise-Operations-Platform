export function generateSupportSlaStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
