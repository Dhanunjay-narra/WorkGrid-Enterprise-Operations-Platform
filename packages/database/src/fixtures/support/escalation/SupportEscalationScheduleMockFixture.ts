export function generateSupportEscalationScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
