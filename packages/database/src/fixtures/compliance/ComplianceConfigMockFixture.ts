export function generateComplianceConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
