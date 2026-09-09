export function generateAbacSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
