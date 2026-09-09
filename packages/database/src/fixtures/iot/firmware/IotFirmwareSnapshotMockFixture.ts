export function generateIotFirmwareSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
