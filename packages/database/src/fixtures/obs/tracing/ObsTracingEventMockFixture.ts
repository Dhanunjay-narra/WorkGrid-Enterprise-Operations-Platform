export function generateObsTracingEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
