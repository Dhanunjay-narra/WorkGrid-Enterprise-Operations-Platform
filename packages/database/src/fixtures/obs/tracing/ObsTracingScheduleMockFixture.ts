export function generateObsTracingScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
