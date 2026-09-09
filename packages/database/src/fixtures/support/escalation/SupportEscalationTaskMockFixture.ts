export function generateSupportEscalationTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
