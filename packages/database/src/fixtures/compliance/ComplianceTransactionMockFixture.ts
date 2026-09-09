export function generateComplianceTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
