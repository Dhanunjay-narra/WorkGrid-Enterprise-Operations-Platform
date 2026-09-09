export function generateComplianceAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
