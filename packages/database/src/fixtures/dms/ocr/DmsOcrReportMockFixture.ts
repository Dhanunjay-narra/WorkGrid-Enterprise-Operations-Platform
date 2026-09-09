export function generateDmsOcrReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
