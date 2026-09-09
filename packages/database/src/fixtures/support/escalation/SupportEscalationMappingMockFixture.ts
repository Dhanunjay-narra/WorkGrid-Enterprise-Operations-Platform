export function generateSupportEscalationMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
