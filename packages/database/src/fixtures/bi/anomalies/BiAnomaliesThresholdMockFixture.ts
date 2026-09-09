export function generateBiAnomaliesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
