export function generateComplianceThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
