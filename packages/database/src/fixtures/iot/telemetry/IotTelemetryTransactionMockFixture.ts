export function generateIotTelemetryTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_telemetry",
    entity: "IotTelemetryTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
