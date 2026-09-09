export function generateDmsOcrSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
