export function generateCommPresenceSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
