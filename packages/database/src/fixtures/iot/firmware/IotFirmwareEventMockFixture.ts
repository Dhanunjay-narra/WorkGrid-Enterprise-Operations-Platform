export function generateIotFirmwareEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
