export function generateObsLoggingEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
