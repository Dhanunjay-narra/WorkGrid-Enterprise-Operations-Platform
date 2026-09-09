export function generateObsMetricsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
