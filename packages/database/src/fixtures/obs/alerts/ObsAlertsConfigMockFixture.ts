export function generateObsAlertsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
