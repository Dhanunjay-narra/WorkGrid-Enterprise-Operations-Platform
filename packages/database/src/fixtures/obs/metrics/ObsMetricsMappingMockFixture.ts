export function generateObsMetricsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
