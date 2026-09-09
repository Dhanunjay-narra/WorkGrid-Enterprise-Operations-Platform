export function generateComplianceMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
