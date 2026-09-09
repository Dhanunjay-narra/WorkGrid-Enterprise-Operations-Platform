export function generateObsLoggingProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
