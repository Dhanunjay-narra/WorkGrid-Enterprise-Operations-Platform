export function generateBiForecastsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
