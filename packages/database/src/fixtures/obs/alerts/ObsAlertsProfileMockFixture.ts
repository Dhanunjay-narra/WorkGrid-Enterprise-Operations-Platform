export function generateObsAlertsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
