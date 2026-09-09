export function generateObsLoggingStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
