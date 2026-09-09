export function generateSupportEscalationNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
