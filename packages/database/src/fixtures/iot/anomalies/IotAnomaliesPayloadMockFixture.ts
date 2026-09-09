export function generateIotAnomaliesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
