export function generateCommDigestNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
