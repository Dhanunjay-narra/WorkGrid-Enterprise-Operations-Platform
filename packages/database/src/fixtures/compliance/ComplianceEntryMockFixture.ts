export function generateComplianceEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
