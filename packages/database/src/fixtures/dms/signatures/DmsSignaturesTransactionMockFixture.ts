export function generateDmsSignaturesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
