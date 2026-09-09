export function generateSupportEscalationItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
