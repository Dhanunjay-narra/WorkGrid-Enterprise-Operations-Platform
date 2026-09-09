export function generateObsSpansMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
