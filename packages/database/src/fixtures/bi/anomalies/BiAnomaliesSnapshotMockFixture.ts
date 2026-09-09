export function generateBiAnomaliesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
