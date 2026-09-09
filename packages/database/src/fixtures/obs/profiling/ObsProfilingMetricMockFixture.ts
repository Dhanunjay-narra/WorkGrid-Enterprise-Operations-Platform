export function generateObsProfilingMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
