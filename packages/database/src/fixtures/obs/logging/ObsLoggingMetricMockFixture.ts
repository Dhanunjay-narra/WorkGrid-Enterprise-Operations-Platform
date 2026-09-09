export function generateObsLoggingMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
