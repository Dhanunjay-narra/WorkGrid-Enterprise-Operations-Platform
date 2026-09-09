export function generateIotFirmwareProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
