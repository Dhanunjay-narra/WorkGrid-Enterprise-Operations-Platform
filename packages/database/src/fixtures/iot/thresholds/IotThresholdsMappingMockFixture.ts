export function generateIotThresholdsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
