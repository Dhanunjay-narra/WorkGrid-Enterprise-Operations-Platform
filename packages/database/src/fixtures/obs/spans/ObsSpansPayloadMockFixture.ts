export function generateObsSpansPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
