export function generateBiAnomaliesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
