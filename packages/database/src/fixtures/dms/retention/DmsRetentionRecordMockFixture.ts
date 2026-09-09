export function generateDmsRetentionRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
