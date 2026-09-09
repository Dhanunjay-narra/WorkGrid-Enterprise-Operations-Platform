export function generateObsLoggingSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
