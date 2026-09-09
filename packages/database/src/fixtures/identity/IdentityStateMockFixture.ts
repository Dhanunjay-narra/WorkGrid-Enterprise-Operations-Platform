export function generateIdentityStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
