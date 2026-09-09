export function generateBiAnomaliesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
