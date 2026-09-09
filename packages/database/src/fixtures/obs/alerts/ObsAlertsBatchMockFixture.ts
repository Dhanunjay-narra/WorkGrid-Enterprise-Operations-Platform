export function generateObsAlertsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
