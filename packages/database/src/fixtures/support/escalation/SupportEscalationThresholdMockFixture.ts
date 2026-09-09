export function generateSupportEscalationThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
