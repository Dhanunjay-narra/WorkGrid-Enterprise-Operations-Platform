export function generateObsAlertsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
