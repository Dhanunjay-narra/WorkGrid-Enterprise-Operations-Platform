export function generateBiAnomaliesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
