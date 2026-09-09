export function generateObsTracingThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
