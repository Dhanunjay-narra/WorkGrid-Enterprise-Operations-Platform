export function generateObsTracingAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
