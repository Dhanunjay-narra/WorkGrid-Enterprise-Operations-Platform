export function generateIotDevicesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
