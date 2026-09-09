export function generateComplianceProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
