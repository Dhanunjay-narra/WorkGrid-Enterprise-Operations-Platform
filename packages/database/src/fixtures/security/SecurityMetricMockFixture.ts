export function generateSecurityMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
