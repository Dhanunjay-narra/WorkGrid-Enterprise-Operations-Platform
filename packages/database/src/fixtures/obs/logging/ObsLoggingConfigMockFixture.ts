export function generateObsLoggingConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
