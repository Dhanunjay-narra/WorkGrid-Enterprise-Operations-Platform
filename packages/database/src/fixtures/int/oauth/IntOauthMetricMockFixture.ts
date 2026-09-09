export function generateIntOauthMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
