export function generateIotTelemetrySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetrySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
