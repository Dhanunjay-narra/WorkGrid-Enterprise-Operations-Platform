export function generateDmsOcrSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
