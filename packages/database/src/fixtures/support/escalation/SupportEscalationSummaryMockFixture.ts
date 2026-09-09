export function generateSupportEscalationSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
