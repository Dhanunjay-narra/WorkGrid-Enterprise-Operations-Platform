export function generateComplianceRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
