export function generateBiAnomaliesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
