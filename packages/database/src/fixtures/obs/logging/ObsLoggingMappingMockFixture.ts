export function generateObsLoggingMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
