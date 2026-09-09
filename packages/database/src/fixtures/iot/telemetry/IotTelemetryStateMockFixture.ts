export function generateIotTelemetryStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
