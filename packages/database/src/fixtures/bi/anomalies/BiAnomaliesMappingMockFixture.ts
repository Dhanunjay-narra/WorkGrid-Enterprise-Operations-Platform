export function generateBiAnomaliesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
