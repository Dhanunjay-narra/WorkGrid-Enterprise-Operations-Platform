export function generateObsTracingConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
