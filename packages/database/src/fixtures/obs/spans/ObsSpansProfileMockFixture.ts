export function generateObsSpansProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
