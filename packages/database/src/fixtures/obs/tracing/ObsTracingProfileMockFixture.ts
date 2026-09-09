export function generateObsTracingProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
