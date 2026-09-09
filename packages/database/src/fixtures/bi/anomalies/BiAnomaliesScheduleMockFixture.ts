export function generateBiAnomaliesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
