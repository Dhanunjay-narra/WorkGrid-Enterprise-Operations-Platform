export function generateObsAlertsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
