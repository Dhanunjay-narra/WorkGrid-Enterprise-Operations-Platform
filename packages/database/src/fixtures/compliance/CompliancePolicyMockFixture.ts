export function generateCompliancePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "CompliancePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
