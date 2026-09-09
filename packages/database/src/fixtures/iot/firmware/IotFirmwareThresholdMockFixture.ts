export function generateIotFirmwareThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
