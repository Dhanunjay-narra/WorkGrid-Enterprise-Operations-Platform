export function generateSupportEscalationReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
