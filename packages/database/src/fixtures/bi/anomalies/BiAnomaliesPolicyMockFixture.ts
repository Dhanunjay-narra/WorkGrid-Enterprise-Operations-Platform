export function generateBiAnomaliesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
