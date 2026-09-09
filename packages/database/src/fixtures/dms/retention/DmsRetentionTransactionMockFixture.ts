export function generateDmsRetentionTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
