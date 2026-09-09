export function generateObsLoggingAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
