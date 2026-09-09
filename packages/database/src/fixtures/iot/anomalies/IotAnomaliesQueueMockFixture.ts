export function generateIotAnomaliesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
