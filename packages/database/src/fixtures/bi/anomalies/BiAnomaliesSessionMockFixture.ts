export function generateBiAnomaliesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
