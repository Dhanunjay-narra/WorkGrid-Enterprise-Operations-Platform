export function generateObsProfilingTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
