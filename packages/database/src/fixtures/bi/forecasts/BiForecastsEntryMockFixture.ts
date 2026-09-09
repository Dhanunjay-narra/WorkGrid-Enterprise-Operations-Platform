export function generateBiForecastsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
