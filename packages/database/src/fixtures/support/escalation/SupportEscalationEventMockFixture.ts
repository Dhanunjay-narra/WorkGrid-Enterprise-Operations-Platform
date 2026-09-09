export function generateSupportEscalationEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
