export function generateObsMetricsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
