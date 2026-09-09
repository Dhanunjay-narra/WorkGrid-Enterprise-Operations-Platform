export function generateIdentitySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentitySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
