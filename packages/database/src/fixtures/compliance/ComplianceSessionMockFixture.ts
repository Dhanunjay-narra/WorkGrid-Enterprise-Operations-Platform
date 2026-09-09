export function generateComplianceSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
