export function generateObsAlertsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
