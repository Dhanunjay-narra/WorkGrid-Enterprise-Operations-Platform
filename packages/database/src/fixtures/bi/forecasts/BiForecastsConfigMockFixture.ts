export function generateBiForecastsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
