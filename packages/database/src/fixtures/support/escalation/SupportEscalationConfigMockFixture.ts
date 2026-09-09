export function generateSupportEscalationConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
