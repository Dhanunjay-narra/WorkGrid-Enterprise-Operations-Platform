export function generateIotFirmwareStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
