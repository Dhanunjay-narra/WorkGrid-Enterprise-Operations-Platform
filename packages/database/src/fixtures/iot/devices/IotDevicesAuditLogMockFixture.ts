export function generateIotDevicesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
