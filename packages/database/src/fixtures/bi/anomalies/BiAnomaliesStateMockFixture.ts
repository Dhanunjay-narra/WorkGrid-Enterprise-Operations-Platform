export function generateBiAnomaliesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
