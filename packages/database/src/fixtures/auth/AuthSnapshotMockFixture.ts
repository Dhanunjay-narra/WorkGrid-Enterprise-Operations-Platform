export function generateAuthSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
