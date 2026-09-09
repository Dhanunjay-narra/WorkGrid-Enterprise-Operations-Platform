export function generateComplianceStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
