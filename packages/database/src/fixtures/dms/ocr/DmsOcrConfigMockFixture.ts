export function generateDmsOcrConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
