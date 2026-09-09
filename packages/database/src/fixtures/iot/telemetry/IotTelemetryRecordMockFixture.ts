export function generateIotTelemetryRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
