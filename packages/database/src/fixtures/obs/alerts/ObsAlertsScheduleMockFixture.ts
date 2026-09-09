export function generateObsAlertsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
