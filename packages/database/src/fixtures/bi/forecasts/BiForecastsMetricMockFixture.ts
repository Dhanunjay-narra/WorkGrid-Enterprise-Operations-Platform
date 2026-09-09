export function generateBiForecastsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
