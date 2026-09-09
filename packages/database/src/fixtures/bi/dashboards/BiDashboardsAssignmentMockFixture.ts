export function generateBiDashboardsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
