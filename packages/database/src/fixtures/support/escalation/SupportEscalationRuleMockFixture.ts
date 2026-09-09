export function generateSupportEscalationRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
