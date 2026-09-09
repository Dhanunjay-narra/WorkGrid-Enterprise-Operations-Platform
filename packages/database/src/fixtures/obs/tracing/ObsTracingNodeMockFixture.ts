export function generateObsTracingNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
