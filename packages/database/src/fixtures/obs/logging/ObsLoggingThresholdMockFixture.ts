export function generateObsLoggingThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
