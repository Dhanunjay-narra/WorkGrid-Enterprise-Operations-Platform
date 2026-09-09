export function generateDmsOcrProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
