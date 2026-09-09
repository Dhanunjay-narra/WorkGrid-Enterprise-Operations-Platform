export function generateIotAnomaliesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
