export function generateComplianceBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
