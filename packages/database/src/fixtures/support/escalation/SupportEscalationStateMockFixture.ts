export function generateSupportEscalationStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
