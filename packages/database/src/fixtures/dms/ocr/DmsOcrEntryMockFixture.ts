export function generateDmsOcrEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
