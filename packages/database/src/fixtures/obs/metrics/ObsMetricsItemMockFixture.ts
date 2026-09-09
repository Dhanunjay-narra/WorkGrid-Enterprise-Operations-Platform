export function generateObsMetricsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
