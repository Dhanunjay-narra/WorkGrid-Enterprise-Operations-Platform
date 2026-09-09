export function generateBiForecastsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
