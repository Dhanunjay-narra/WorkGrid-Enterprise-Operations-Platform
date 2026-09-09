export function generateCommDigestSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
