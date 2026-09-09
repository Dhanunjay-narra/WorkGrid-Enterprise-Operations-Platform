export function generateSupportSlaPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
