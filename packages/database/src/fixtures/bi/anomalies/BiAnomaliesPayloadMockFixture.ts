export function generateBiAnomaliesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
