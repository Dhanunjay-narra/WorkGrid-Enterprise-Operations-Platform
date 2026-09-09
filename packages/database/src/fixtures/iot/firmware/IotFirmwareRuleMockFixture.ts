export function generateIotFirmwareRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
