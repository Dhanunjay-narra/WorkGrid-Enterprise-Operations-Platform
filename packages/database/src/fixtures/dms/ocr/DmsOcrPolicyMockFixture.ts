export function generateDmsOcrPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
