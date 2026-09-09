export function generateObsProfilingTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
