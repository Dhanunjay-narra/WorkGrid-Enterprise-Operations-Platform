export function generateBiForecastsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
