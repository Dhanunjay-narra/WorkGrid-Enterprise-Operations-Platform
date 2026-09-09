export function generateBiForecastsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
