export function generateIotTelemetryQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
