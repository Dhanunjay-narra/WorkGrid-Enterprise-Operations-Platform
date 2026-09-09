export function generateIotDevicesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
