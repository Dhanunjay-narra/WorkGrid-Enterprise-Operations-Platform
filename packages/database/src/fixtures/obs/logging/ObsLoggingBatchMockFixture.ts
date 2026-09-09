export function generateObsLoggingBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
