export function generateIotTelemetryTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
