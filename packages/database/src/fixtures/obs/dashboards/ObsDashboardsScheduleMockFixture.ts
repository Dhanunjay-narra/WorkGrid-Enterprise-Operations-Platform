export function generateObsDashboardsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
