export function generateAuthMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
