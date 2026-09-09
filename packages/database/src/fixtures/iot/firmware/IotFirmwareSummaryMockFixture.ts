export function generateIotFirmwareSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
