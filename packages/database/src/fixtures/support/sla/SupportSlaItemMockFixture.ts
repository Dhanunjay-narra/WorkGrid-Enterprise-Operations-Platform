export function generateSupportSlaItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
