export function generateIotFirmwareScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
