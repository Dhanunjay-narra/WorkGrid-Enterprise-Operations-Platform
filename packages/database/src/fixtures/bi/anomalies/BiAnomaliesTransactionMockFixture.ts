export function generateBiAnomaliesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
