export function generateObsLoggingEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
