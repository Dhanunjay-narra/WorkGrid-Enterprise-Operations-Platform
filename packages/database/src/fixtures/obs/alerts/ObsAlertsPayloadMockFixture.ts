export function generateObsAlertsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
