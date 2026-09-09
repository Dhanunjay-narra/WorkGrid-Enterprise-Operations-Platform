export function generateBiAnomaliesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
