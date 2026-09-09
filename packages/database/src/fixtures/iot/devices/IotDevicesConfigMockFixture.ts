export function generateIotDevicesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
