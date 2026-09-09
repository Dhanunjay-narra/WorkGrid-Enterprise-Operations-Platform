export function generateSupportCsatMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
