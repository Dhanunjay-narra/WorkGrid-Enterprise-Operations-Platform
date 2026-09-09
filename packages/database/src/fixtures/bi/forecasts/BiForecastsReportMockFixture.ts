export function generateBiForecastsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
