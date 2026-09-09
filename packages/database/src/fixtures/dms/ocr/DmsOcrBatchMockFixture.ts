export function generateDmsOcrBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
