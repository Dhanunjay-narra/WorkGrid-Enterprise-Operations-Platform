export function generateIotFirmwareMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
