export function generateObsAlertsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
