export function generateObsMetricsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
