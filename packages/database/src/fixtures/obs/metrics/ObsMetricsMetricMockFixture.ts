export function generateObsMetricsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
