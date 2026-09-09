export function generateBiForecastsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
