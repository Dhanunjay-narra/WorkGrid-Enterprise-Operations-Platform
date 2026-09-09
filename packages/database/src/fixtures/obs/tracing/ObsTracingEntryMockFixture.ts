export function generateObsTracingEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
