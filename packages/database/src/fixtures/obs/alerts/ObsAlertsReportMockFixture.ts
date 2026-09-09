export function generateObsAlertsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
