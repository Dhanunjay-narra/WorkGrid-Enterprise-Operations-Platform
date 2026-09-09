export function generateIotTelemetryConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
