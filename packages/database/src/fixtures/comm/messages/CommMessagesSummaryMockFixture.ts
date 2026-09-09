export function generateCommMessagesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
