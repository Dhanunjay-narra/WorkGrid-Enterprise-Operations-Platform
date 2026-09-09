export function generateObsSpansMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
