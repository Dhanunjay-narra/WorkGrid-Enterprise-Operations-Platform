export function generateObsLoggingSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
