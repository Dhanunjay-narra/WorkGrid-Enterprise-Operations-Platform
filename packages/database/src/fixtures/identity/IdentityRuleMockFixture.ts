export function generateIdentityRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
