export function generateIotTelemetryPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
