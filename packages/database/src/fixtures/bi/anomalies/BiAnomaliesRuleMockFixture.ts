export function generateBiAnomaliesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
