export function generateIotDevicesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
