export function generateObsSpansNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
