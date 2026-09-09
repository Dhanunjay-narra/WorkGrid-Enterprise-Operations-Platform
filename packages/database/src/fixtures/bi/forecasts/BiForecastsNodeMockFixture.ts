export function generateBiForecastsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
