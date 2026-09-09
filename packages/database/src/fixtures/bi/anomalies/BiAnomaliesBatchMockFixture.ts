export function generateBiAnomaliesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
