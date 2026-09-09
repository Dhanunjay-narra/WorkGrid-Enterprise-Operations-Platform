export function generateBiAnomaliesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
