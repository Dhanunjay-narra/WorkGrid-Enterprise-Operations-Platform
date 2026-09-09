export function generateIntSlackMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
