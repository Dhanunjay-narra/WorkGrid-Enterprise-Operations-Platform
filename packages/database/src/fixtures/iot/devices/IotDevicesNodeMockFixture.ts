export function generateIotDevicesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
