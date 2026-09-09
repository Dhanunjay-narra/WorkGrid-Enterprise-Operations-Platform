export function generateDmsOcrRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
