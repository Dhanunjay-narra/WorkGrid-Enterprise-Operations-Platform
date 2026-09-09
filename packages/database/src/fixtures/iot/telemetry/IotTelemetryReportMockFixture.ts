export function generateIotTelemetryReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
