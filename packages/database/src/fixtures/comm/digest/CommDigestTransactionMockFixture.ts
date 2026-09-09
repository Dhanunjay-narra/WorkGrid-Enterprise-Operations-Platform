export function generateCommDigestTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
