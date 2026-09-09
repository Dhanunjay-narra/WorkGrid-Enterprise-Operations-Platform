export function generateObsMetricsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
