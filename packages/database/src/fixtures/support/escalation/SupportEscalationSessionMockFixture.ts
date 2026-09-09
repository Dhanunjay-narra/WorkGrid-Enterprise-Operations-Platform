export function generateSupportEscalationSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
