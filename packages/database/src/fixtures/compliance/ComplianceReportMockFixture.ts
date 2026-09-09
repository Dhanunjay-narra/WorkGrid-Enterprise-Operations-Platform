export function generateComplianceReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
