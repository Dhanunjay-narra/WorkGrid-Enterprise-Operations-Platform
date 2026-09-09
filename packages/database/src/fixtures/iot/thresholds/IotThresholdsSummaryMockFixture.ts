export function generateIotThresholdsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
