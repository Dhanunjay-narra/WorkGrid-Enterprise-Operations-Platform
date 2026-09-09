export function generateObsSpansRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
