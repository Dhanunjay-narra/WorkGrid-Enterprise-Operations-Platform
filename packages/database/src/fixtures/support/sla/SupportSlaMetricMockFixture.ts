export function generateSupportSlaMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
