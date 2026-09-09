export function generateIdentityNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
