export function generateBiForecastsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
