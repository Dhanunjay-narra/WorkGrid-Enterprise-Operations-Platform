export function generateIotThresholdsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
