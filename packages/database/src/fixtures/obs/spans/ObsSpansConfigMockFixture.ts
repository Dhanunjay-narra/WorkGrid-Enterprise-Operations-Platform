export function generateObsSpansConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
