export function generateIotFirmwareItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
