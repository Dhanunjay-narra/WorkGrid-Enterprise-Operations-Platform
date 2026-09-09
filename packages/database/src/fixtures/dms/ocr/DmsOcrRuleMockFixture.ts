export function generateDmsOcrRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
