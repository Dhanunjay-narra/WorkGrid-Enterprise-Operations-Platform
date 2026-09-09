export function generateSupportEscalationBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
