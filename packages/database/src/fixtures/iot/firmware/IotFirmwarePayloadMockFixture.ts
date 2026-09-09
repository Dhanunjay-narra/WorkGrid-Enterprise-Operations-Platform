export function generateIotFirmwarePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwarePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
