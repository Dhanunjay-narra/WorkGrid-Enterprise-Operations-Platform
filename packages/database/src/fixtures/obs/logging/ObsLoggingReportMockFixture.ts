export function generateObsLoggingReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
