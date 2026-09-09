export function generateIotTelemetryPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
