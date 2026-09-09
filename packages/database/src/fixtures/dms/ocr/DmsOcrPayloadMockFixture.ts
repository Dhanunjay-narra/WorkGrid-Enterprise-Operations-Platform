export function generateDmsOcrPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
