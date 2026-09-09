export function generateIotThresholdsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
