export function generateObsMetricsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
