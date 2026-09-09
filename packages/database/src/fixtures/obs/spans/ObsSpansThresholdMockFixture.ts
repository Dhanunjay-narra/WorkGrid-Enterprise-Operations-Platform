export function generateObsSpansThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
