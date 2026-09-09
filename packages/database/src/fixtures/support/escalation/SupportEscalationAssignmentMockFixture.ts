export function generateSupportEscalationAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
