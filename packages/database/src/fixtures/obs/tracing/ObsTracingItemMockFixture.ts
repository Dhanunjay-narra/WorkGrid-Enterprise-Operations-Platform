export function generateObsTracingItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
