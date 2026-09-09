export function generateDmsOcrItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
