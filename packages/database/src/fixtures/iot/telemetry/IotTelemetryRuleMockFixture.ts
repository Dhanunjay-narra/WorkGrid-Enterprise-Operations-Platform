export function generateIotTelemetryRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
