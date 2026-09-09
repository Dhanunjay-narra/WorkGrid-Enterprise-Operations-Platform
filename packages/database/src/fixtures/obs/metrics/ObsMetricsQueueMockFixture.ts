export function generateObsMetricsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
