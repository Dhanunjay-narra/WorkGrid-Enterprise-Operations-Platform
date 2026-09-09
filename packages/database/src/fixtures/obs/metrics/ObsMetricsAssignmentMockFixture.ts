export function generateObsMetricsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
