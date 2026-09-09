export function generateObsAlertsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
