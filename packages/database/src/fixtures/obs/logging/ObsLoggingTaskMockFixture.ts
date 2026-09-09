export function generateObsLoggingTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
