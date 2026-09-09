export function generateObsProfilingPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
