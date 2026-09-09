export function generateObsMetricsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
