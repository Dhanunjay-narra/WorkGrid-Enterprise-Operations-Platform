export function generateObsProfilingAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
