export function generateObsSpansStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
