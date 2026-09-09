export function generateSupportSlaAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
