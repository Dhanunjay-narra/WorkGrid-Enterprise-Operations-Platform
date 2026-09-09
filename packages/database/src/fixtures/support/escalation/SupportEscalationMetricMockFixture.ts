export function generateSupportEscalationMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
