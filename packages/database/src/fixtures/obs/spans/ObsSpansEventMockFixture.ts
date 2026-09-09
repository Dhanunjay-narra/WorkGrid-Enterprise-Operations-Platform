export function generateObsSpansEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
