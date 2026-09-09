export function generateObsProfilingEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
