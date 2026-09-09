export function generateSecuritySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecuritySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
