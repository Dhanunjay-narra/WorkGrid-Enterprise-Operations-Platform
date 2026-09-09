export function generateComplianceRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
