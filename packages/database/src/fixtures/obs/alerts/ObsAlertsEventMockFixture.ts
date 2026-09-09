export function generateObsAlertsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
