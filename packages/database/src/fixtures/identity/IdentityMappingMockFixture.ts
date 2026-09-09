export function generateIdentityMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
