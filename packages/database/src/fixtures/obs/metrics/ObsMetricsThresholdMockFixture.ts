export function generateObsMetricsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
