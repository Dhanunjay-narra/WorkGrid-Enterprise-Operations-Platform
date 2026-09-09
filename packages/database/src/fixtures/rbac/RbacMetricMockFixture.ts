export function generateRbacMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
