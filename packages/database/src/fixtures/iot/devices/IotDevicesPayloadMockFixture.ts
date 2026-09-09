export function generateIotDevicesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
