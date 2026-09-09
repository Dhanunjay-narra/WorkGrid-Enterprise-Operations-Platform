export function generateObsDashboardsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
