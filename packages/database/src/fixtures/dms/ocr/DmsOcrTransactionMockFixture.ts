export function generateDmsOcrTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
