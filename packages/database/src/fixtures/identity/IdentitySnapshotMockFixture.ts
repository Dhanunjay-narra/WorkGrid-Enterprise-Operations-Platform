export function generateIdentitySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentitySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
