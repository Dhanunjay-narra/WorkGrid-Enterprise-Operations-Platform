export function generateDmsRetentionEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
