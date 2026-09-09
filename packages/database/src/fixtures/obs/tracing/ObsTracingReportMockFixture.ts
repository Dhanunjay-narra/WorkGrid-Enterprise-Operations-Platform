export function generateObsTracingReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
