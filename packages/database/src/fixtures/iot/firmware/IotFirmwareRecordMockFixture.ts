export function generateIotFirmwareRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
