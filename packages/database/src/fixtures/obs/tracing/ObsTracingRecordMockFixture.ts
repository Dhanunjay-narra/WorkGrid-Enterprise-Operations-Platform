export function generateObsTracingRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
