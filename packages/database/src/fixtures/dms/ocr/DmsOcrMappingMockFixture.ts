export function generateDmsOcrMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
