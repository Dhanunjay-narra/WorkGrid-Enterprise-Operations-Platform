export function generateObsLoggingQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
