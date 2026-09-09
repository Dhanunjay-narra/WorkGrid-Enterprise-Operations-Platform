export function generateObsProfilingReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
