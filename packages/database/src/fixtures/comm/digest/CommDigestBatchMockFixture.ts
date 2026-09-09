export function generateCommDigestBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
