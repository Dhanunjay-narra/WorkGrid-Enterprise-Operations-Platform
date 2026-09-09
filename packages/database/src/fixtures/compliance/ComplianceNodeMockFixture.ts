export function generateComplianceNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
