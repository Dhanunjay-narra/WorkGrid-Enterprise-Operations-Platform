export function generateIotThresholdsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
