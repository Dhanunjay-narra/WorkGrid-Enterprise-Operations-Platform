export function generateComplianceItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
