export function generateIotTelemetryItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
