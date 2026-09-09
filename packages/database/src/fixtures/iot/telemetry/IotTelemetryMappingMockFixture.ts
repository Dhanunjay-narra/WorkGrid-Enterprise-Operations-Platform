export function generateIotTelemetryMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
