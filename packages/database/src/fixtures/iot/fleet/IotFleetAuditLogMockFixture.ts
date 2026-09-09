export function generateIotFleetAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
