export function generateIntSyncMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
