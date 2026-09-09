export function generateIotFirmwareBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
