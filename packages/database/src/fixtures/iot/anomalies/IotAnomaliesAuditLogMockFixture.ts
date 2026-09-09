export function generateIotAnomaliesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
