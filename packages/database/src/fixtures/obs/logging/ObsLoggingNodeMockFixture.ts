export function generateObsLoggingNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
