export function generateBiForecastsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
