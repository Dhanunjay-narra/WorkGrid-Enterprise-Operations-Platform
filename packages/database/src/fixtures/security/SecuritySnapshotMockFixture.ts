export function generateSecuritySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecuritySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
