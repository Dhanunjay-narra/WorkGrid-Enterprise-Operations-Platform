export function generateBiForecastsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
