export function generateDmsSignaturesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
