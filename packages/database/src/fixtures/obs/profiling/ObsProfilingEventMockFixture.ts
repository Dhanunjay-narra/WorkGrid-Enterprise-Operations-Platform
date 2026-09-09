export function generateObsProfilingEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
