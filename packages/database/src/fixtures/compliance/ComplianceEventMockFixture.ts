export function generateComplianceEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
