export function generateObsAlertsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
