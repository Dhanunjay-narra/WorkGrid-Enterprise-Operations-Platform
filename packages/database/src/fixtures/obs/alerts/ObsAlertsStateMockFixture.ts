export function generateObsAlertsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
