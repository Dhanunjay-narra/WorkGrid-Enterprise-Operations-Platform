export function generateIotFirmwareConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
