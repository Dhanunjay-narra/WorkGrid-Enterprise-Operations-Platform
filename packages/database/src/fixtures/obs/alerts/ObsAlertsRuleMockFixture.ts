export function generateObsAlertsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
