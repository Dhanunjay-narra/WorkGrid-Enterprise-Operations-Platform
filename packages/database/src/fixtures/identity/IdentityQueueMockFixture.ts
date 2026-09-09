export function generateIdentityQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
