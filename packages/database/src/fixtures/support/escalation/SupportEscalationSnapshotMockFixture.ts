export function generateSupportEscalationSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
