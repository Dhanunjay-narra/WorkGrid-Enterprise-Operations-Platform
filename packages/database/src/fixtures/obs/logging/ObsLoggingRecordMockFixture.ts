export function generateObsLoggingRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
