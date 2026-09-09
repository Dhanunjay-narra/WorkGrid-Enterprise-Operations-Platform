export function generateIotTelemetrySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetrySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
