export function generateIntOauthSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
