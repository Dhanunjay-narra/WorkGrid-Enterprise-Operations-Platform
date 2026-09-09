export function generateBiAnomaliesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
