export function generateIotTelemetrySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetrySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
