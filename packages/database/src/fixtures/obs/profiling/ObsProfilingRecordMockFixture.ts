export function generateObsProfilingRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
