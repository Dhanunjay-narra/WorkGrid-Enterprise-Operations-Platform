export function generateIotDevicesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
