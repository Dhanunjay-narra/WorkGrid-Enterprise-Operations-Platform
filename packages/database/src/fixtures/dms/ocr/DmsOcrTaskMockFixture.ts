export function generateDmsOcrTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
