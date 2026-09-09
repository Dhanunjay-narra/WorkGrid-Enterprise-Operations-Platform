export function generateSupportEscalationPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
