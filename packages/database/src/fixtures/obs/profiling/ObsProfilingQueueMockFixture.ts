export function generateObsProfilingQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
