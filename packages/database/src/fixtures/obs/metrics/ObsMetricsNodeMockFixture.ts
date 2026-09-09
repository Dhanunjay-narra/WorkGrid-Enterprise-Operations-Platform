export function generateObsMetricsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
