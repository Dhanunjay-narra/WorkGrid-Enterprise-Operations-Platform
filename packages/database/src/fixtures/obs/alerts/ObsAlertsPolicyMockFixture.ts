export function generateObsAlertsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
