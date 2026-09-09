export function generateObsSpansItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
