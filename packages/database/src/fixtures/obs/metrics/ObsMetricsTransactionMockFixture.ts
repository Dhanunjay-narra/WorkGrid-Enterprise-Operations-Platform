export function generateObsMetricsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_metrics",
    entity: "ObsMetricsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
