export function generateIotDevicesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
