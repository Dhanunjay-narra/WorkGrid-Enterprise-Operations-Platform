export function generateObsAlertsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_alerts",
    entity: "ObsAlertsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
