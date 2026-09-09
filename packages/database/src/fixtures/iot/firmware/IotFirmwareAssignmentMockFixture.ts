export function generateIotFirmwareAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
