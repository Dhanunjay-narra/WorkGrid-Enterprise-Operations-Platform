export function generateIotTelemetryMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
