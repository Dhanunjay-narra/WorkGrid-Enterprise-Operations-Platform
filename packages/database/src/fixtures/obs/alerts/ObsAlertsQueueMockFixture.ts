export function generateObsAlertsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
