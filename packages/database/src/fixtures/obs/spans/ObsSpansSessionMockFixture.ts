export function generateObsSpansSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
