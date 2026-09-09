export function generateBiAnomaliesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
