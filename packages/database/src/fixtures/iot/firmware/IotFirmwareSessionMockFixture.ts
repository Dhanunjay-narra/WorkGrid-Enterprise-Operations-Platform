export function generateIotFirmwareSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
