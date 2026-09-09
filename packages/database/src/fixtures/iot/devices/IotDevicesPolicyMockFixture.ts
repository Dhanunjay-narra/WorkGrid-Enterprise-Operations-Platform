export function generateIotDevicesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
