export function generateObsAlertsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
