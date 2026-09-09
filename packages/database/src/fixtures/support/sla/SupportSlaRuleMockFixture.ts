export function generateSupportSlaRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
