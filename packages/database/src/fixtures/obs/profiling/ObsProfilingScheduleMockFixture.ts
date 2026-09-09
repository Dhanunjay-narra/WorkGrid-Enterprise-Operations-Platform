export function generateObsProfilingScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
