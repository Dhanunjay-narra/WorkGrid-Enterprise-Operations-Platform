export function generateSupportEscalationPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
