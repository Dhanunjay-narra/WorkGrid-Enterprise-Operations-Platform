export function generateObsMetricsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
