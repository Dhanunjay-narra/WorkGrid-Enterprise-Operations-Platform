export function generateIdentitySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentitySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
