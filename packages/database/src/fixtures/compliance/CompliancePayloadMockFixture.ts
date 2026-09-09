export function generateCompliancePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "CompliancePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
