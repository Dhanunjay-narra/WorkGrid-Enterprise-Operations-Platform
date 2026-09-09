export function generateBiForecastsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
