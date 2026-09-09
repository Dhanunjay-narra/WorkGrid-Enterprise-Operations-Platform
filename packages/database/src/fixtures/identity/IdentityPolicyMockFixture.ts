export function generateIdentityPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
