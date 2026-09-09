export function generateDmsOcrThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
