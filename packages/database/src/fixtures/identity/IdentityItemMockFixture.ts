export function generateIdentityItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
