export function generateObsMetricsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
