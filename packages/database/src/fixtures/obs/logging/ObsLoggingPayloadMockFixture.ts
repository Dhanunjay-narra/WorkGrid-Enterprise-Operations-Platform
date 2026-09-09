export function generateObsLoggingPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
