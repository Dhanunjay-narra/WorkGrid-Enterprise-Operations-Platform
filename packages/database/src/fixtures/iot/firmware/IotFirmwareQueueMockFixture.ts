export function generateIotFirmwareQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
