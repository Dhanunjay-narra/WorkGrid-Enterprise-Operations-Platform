export function generateIotTelemetryAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
