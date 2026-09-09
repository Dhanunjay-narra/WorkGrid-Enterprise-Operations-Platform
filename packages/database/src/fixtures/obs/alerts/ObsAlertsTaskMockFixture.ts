export function generateObsAlertsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
