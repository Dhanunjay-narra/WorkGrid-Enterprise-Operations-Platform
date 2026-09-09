export function generateIotTelemetryEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
