export function generateAbacMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
