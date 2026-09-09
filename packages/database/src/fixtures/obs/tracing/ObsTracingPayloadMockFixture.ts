export function generateObsTracingPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
