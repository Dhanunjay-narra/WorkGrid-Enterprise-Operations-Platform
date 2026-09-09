export function generateBiForecastsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
