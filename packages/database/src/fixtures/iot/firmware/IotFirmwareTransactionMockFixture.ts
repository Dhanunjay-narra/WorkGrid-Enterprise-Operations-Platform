export function generateIotFirmwareTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
