export function generateBiAnomaliesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
