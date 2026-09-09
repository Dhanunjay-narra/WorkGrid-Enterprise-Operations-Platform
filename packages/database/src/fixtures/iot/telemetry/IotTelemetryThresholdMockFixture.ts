export function generateIotTelemetryThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
