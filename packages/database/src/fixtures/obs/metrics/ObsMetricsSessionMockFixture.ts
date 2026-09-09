export function generateObsMetricsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
