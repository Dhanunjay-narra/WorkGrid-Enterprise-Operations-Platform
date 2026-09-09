export function generateDmsOcrMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
