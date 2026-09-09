export function generateAbacSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
