export function generateObsProfilingThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
