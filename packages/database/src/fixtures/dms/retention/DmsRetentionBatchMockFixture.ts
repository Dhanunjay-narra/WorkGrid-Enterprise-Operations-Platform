export function generateDmsRetentionBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
