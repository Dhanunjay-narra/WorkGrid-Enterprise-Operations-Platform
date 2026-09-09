export function generateObsAlertsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
