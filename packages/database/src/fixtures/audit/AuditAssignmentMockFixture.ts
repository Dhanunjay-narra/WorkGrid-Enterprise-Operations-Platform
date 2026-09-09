export function generateAuditAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
