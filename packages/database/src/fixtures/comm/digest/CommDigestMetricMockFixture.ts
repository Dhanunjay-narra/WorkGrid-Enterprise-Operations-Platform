export function generateCommDigestMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
