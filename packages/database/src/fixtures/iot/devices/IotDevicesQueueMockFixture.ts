export function generateIotDevicesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
