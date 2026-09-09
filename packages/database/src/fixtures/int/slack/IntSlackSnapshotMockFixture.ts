export function generateIntSlackSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
