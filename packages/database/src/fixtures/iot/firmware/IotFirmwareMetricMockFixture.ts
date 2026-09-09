export function generateIotFirmwareMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
