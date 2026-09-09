export function generateIotDevicesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
