export function generateBiAnomaliesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
