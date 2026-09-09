export function generateBiAnomaliesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
