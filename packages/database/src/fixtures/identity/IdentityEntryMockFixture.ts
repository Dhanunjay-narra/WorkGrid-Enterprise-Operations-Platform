export function generateIdentityEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
