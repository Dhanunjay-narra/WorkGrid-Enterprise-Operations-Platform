export function generateIotTelemetryScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetrySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
