export function generateObsDashboardsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
