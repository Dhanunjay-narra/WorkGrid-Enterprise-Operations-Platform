export function generateIotLocationsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
