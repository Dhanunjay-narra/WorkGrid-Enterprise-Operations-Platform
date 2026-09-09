export function generateObsMetricsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
