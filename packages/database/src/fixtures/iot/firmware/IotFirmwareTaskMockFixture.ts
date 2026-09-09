export function generateIotFirmwareTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
