export function generateObsLoggingScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
