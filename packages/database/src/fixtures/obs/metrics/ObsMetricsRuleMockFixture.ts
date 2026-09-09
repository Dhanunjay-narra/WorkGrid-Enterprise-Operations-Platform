export function generateObsMetricsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
