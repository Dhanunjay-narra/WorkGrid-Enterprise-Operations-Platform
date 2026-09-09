export function generateObsMetricsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
