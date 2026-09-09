export function generateIotFirmwareReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
