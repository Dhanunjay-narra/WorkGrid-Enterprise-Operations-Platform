export function generateAbacReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
