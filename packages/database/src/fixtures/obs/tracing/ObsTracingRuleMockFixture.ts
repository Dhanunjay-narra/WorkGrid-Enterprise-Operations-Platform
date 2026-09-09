export function generateObsTracingRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
