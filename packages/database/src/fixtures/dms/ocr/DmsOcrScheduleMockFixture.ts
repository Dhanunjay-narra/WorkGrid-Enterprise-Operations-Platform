export function generateDmsOcrScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
