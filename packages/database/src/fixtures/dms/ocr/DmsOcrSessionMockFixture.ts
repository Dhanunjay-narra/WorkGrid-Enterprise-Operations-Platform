export function generateDmsOcrSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
