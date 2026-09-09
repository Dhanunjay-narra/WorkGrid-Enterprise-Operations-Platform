export function generateObsMetricsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
