export function generateObsTracingPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
