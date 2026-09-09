export function generateComplianceMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
