export function generateBiAnomaliesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
