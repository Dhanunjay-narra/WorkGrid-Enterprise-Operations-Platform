export function generateIotDevicesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
