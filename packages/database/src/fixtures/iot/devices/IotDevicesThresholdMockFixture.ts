export function generateIotDevicesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
