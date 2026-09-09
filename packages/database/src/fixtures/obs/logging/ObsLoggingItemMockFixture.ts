export function generateObsLoggingItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
