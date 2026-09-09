export function generateDmsOcrEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
