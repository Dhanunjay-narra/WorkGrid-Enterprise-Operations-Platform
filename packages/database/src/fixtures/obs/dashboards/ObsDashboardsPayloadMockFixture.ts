export function generateObsDashboardsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
