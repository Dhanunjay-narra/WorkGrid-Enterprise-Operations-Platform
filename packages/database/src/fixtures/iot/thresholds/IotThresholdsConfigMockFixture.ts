export function generateIotThresholdsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
