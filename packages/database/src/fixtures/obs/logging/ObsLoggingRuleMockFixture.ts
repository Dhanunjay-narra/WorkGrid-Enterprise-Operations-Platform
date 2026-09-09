export function generateObsLoggingRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
