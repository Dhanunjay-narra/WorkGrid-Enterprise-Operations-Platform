export function generateIotFirmwareAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwareAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
