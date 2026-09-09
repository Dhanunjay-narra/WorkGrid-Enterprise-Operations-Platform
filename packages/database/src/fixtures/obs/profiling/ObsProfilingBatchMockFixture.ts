export function generateObsProfilingBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
