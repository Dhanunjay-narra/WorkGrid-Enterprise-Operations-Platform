export function generateIdentityConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
