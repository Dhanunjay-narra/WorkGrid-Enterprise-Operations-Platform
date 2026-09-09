export function generateDmsVersionsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
