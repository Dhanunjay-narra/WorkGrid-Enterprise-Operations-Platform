export function generateObsSpansEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
