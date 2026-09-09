export function generateIotFirmwareNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
