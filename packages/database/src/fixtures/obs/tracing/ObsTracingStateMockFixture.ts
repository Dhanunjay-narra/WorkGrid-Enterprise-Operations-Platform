export function generateObsTracingStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
