export function generateSupportEscalationRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
