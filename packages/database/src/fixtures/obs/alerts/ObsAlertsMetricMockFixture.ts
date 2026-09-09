export function generateObsAlertsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
