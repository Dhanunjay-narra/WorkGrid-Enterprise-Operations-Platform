export function generateIotAnomaliesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
