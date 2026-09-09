export function generateIdentityRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
