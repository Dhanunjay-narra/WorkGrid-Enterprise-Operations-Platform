export function generateIotFirmwareEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
