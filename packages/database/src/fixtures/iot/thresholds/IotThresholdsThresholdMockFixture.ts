export function generateIotThresholdsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
