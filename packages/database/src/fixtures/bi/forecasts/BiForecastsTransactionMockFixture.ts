export function generateBiForecastsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
