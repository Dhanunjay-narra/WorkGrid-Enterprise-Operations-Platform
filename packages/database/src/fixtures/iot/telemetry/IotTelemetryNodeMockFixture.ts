export function generateIotTelemetryNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
