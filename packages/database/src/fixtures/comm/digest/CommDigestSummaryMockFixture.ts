export function generateCommDigestSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
