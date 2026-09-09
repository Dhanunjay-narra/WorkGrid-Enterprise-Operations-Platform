export function generateIdentityProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
