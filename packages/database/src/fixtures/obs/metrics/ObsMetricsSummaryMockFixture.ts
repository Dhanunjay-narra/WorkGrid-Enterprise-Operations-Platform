export function generateObsMetricsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
