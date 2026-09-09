export function generateObsSpansRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
