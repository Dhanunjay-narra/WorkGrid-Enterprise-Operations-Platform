export function generateIotTelemetryAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
