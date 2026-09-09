export function generateCommDigestPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
