export function generateComplianceSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
