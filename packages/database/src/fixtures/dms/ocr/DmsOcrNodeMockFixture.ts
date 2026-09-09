export function generateDmsOcrNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
