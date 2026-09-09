export function generateDmsOcrStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
