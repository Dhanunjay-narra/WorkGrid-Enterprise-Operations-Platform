export function generateCommThreadsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
