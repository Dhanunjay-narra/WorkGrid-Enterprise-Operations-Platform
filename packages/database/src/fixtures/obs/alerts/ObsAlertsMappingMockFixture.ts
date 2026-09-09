export function generateObsAlertsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
