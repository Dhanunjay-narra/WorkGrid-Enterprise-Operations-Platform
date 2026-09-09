export function generateObsAlertsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
