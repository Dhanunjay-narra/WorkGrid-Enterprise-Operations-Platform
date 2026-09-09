export function generateCommDigestStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
