export function generateIotDevicesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
