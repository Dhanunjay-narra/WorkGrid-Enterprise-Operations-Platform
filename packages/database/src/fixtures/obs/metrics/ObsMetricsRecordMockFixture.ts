export function generateObsMetricsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
