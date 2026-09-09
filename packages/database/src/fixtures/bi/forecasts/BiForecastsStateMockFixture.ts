export function generateBiForecastsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
