export function generateObsMetricsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
