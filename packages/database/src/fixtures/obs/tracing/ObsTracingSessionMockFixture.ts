export function generateObsTracingSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
