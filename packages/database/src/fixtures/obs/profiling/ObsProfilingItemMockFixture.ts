export function generateObsProfilingItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
