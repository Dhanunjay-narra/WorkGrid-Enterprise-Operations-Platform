export function generateSupportEscalationEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
