export function generateObsSpansBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
