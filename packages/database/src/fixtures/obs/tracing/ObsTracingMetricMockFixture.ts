export function generateObsTracingMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
