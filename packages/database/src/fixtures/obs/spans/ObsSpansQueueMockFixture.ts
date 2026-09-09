export function generateObsSpansQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
