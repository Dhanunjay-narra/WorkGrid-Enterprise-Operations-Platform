export function generateObsLoggingPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
