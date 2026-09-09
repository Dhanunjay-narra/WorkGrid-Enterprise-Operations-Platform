export function generateIotDevicesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
