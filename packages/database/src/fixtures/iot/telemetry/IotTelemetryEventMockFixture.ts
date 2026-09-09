export function generateIotTelemetryEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
