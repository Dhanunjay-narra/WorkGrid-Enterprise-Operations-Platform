export function generateIdentityMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
