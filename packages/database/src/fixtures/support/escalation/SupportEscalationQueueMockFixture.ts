export function generateSupportEscalationQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
