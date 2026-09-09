export function generateSupportEscalationTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
