export function generateDmsOcrQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
