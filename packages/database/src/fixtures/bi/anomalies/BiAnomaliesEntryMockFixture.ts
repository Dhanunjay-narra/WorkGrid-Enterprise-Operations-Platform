export function generateBiAnomaliesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
