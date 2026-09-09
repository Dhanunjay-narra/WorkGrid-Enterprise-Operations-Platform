export function generateObsTracingBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
