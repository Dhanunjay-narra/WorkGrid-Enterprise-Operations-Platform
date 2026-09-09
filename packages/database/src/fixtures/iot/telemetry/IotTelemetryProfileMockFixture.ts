export function generateIotTelemetryProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
