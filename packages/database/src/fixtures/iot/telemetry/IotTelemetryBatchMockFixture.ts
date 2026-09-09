export function generateIotTelemetryBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
