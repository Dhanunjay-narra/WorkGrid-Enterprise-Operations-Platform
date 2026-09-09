export function generateSecurityAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
