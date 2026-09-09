export function generateIotDevicesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
