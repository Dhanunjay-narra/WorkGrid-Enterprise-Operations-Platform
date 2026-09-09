export function generateObsTracingMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
