export function generateDmsRetentionSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
