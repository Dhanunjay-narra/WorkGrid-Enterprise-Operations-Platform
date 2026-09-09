export function generateCommCallsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
